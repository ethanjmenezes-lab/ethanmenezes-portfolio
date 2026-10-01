import assert from "node:assert/strict";

const base = new URL(process.argv[2] || "http://localhost:3000");
const paths = ["/", "/projects/team-velo", "/projects/satprep1600"];
const pages = new Map();
for (const path of paths) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path} should load`);
  const html = await response.text();
  pages.set(path, html);
  assert.ok(
    html.includes('id="main"'),
    `${path}: server-rendered content missing`,
  );
  assert.ok(
    !/SAMPLE PROJECT|coming soon|Example toolkit|placeholder/i.test(html),
    `${path}: placeholder content remains`,
  );
  assert.ok(
    !html.includes("fonts.googleapis.com"),
    `${path}: remote Google Fonts dependency`,
  );
  assert.ok(
    !html.includes("682-216-0103"),
    `${path}: phone number leaked into page content`,
  );
}
const home = pages.get("/");
for (const id of [
  "home",
  "projects",
  "about",
  "exploration",
  "skills",
  "experience",
  "resume",
  "contact",
]) {
  assert.ok(home.includes(`id="${id}"`), `Missing homepage section: ${id}`);
}
for (const [path, html] of pages) {
  for (const match of html.matchAll(/href="([^"#]*#[^"]+)"/g)) {
    const url = new URL(match[1], new URL(path, base));
    if (url.origin !== base.origin) continue;
    const target = pages.get(url.pathname);
    assert.ok(
      target?.includes(`id="${url.hash.slice(1)}"`),
      `Broken local anchor ${match[1]} on ${path}`,
    );
  }
}
assert.ok(home.includes("mailto:ethanmenezes@gmail.com"));
assert.ok(
  !home.includes("linkedin.com"),
  "Unverified LinkedIn link should be omitted",
);
assert.ok(pages.get("/projects/team-velo").includes("Web Worker"));
assert.ok(
  pages
    .get("/projects/team-velo")
    .includes("<title>Team Velo | Ethan Menezes</title>"),
);
assert.ok(
  pages
    .get("/projects/satprep1600")
    .includes("<title>SATPrep1600 | Ethan Menezes</title>"),
);
assert.ok(pages.get("/projects/satprep1600").includes("not live analytics"));
const missing = await fetch(new URL("/projects/does-not-exist", base));
assert.equal(missing.status, 404);
assert.ok((await missing.text()).includes("Nothing connected here."));
const pdf = await fetch(new URL("/resume.pdf", base));
assert.equal(pdf.status, 200);
assert.match(pdf.headers.get("content-type"), /application\/pdf/);
assert.equal(
  Buffer.from(await pdf.arrayBuffer())
    .subarray(0, 5)
    .toString(),
  "%PDF-",
);
for (const path of ["/projects/satprep1600.jpg", "/opengraph-image"]) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path} missing`);
  assert.match(response.headers.get("content-type"), /^image\//);
}
console.log(
  "PASS: 3 pages, server-rendered sections, local anchors, metadata, placeholder checks, unknown-project 404, résumé, screenshot, and social image.",
);
