#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

/* ------------------ Resolve __dirname in ESM ------------------ */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ------------------ Get project name ------------------ */
const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Please provide a project name");
  process.exit(1);
}

/* ------------------ Paths ------------------ */
const targetDir = path.join(process.cwd(), projectName);

// 👇 THIS MUST MATCH YOUR REAL TEMPLATE FOLDER NAME
const templateDir = path.join(
  __dirname,
  "../templates/backend/my-backend-template"
);

/* ------------------ Validate template ------------------ */
if (!fs.existsSync(templateDir)) {
  console.error("❌ Template folder not found at:");
  console.error(templateDir);
  process.exit(1);
}

if (fs.existsSync(targetDir)) {
  console.error("❌ Folder already exists:", projectName);
  process.exit(1);
}

/* ------------------ Copy template ------------------ */
fs.cpSync(templateDir, targetDir, { recursive: true });

/* ------------------ Init git & install ------------------ */
try {
  execSync("git init", { cwd: targetDir, stdio: "inherit" });
  execSync("npm install", { cwd: targetDir, stdio: "inherit" });
} catch (err) {
  console.warn("⚠️ Git or npm install failed. You can run manually.");
}

/* ------------------ Done ------------------ */
console.log(`
✅ Backend project created successfully!

Next steps:
  cd ${projectName}
  npm run dev
`);
