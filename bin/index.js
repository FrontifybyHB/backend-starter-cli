#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

/* ------------------ Resolve __dirname (ESM) ------------------ */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ------------------ Read CLI Args ------------------ */
const args = process.argv.slice(2);
const projectName = args[0] || "express-backend";

/* ------------------ Paths ------------------ */
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(
  __dirname,
  "../templates/backend/backend-starter-template"
);

/* ------------------ Validations ------------------ */
if (fs.existsSync(targetDir)) {
  console.error("❌ Folder already exists:", projectName);
  process.exit(1);
}

if (!fs.existsSync(templateDir)) {
  console.error("❌ Express template not found");
  process.exit(1);
}

/* ------------------ Copy Template ------------------ */
fs.cpSync(templateDir, targetDir, { recursive: true });
console.log("📦 Express backend template copied");

/* ------------------ Install Dependencies ------------------ */
console.log("📥 Installing dependencies...");
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

/* ------------------ Git Init (Optional) ------------------ */
try {
  execSync("git init", { cwd: targetDir, stdio: "ignore" });
  console.log("🔧 Git initialized");
} catch {
  console.log("⚠️ Git not initialized");
}

/* ------------------ Success Message ------------------ */
console.log(`
✅ Express backend setup complete!

👉 Next steps:
cd ${projectName}
rm -rf .git
npm run dev
`);
