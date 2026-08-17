#!/usr/bin/env node
/**
 * Named verify for ravens foundation.
 * Checks layout, contracts presence, frontmatter schemas, and ID uniqueness.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function mustExist(rel) {
  if (!exists(rel)) errors.push(`missing required path: ${rel}`);
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function walkMarkdown(dirRel, out = []) {
  const abs = path.join(root, dirRel);
  if (!fs.existsSync(abs)) return out;
  for (const ent of fs.readdirSync(abs, { withFileTypes: true })) {
    const rel = path.join(dirRel, ent.name).replaceAll("\\", "/");
    if (ent.isDirectory()) walkMarkdown(rel, out);
    else if (ent.name.endsWith(".md")) out.push(rel);
  }
  return out;
}

function parseFrontmatter(text) {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) return null;
  const normalized = text.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) return null;
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) return null;
  const block = normalized.slice(4, end);
  const data = {};
  for (const line of block.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (m) data[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return data;
}

function expectSchema(rel, expected) {
  if (!exists(rel)) {
    errors.push(`missing required path: ${rel}`);
    return;
  }
  const fm = parseFrontmatter(read(rel));
  if (!fm) errors.push(`${rel} missing YAML frontmatter`);
  else if (fm.schema !== expected)
    errors.push(`${rel} schema must be ${expected} (got ${fm.schema ?? "none"})`);
}

const required = [
  "README.md",
  "AGENTS.md",
  "watchlist.md",
  "index.md",
  "agents/huginn.md",
  "agents/muninn.md",
  "docs/contracts/README.md",
  "docs/contracts/inbox.md",
  "docs/contracts/knowledge-note.md",
  "docs/contracts/signal.md",
  "docs/quality.md",
  "docs/runbook.md",
  "docs/consumers.md",
  "docs/architecture/overview.md",
  "signals/README.md",
  "examples/README.md",
  "package.json",
  "scripts/verify.mjs",
];

for (const rel of required) mustExist(rel);

const domains = [
  "ai-agents",
  "data-bi",
  "career",
  "food",
  "fitness",
  "finance",
  "content",
  "parenting",
  "security",
];

for (const d of domains) {
  const hub = `knowledge/${d}/README.md`;
  mustExist(hub);
  if (exists(hub)) {
    const fm = parseFrontmatter(read(hub));
    if (!fm) errors.push(`${hub} missing YAML frontmatter`);
    else if (fm.schema !== "ravens.domain-hub/v1")
      errors.push(`${hub} schema must be ravens.domain-hub/v1`);
    else if (fm.domain !== d) errors.push(`${hub} domain frontmatter mismatch`);
  }
}

expectSchema("examples/inbox-sample.md", "ravens.inbox/v1");
expectSchema("examples/knowledge-sample.md", "ravens.knowledge/v1");
expectSchema("examples/signal-sample.md", "ravens.signal/v1");

const findIds = new Map(); // id -> file
const knowIds = new Map();
const sigIds = new Map();

function track(map, id, rel, label) {
  if (map.has(id) && map.get(id) !== rel)
    errors.push(`duplicate ${label} id ${id} in ${rel} and ${map.get(id)}`);
  map.set(id, rel);
}

for (const rel of walkMarkdown("inbox")) {
  if (rel.endsWith("README.md")) continue;
  const base = path.basename(rel);
  if (!/^\d{4}-\d{2}-\d{2}\.md$/.test(base)) {
    warnings.push(`unexpected inbox file name: ${rel}`);
    continue;
  }
  expectSchema(rel, "ravens.inbox/v1");
  const text = read(rel);
  for (const m of text.matchAll(/FIND-\d{8}-\d{3}/g)) {
    track(findIds, m[0], rel, "FIND");
  }
}

for (const rel of walkMarkdown("knowledge")) {
  if (rel.endsWith("README.md")) continue;
  expectSchema(rel, "ravens.knowledge/v1");
  const fm = parseFrontmatter(read(rel));
  if (fm?.id) track(knowIds, fm.id, rel, "KNOW");
}

for (const rel of walkMarkdown("signals")) {
  if (rel.endsWith("README.md")) continue;
  expectSchema(rel, "ravens.signal/v1");
  const fm = parseFrontmatter(read(rel));
  if (fm?.id) track(sigIds, fm.id, rel, "SIG");
}

// Fixture IDs must stay in examples only
for (const [id, rel] of findIds) {
  if (id.startsWith("FIND-20990101-"))
    errors.push(`fixture FIND id ${id} leaked into live inbox at ${rel}`);
}

if (warnings.length) {
  console.log("Warnings:");
  for (const w of warnings) console.log(`  - ${w}`);
}

if (errors.length) {
  console.error("verify failed:");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log("verify ok");
console.log(
  `  domains=${domains.length} liveFind=${findIds.size} liveKnow=${knowIds.size} liveSig=${sigIds.size}`
);
