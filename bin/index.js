#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const projectName = process.argv[2];

if (!projectName) {
    console.error("❌ Please provide a project name");
    process.exit(1);
}

const currentDir = process.cwd();
const targetDir = path.join(currentDir, projectName);
const templateDir = path.join(
    new URL(import.meta.url).pathname,
    "../../templates/backend"
);

if (fs.existsSync(targetDir)) {
    console.error("❌ Folder already exists");
    process.exit(1);
}

// Copy template
fs.cpSync(templateDir, targetDir, { recursive: true });

console.log("✅ Project created:", projectName);

// Init fresh git
execSync("git init", { cwd: targetDir, stdio: "inherit" });

// Install deps
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

console.log(`
🚀 Backend Starter Ready!

cd ${projectName}
npm run dev
`);
