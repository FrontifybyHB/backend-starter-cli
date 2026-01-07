#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

/* Resolve __dirname for ESM */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Project name from CLI */
const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Please provide a project name");
  process.exit(1);
}

/* Paths */
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(
  __dirname,
  "../templates/backend/backend-starter-template"
);

/* Validate */
if (!fs.existsSync(templateDir)) {
  console.error("❌ Template not found");
  process.exit(1);
}

if (fs.existsSync(targetDir)) {
  console.error("❌ Folder already exists");
  process.exit(1);
}

/* Copy Template */
fs.cpSync(templateDir, targetDir, { recursive: true });

console.log("📦 Backend starter copied");

/* Install dependencies */
console.log("📥 Installing dependencies...");
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

/* Git init (optional but professional) */
try {
  execSync("git init", { cwd: targetDir });
  console.log("🔧 Git initialized");
} catch {
  console.log("⚠️ Git not initialized");
}

/* Success */
console.log(`
✅ Backend setup complete!

👉 Next steps:
cd ${projectName}
rm -rf .git
npm run dev
`);
