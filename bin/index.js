#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

/* Resolve __dirname */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Get project name */
const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Please provide a project name");
  process.exit(1);
}

/* Paths */
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(
  __dirname,
  "../templates/backend/my-backend-template"
);

/* Validations */
if (!fs.existsSync(templateDir)) {
  console.error("❌ Template not found");
  process.exit(1);
}

if (fs.existsSync(targetDir)) {
  console.error("❌ Folder already exists:", projectName);
  process.exit(1);
}

/* Copy template */
fs.cpSync(templateDir, targetDir, { recursive: true });

/* Initialize git */
try {
  execSync("git init", { cwd: targetDir, stdio: "ignore" });
} catch {}

/* Install dependencies */
try {
  console.log("📦 Installing dependencies...");
  execSync("npm install", { cwd: targetDir, stdio: "inherit" });
} catch {
  console.warn("⚠️ npm install failed. Run it manually.");
}

console.log(`
✅ Project created successfully!

Next steps:
  cd ${projectName}
  npm run dev
`);
