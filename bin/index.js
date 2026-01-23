#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

/* Resolve __dirname (ESM safe) */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Supported frameworks */
const SUPPORTED_FLAGS = ['--nextjs', '--express', '--django', '--spring'];
const DEFAULT_FRAMEWORK = 'express';

/* Parse arguments */
const args = process.argv.slice(2);
const projectName = args.find(arg => !arg.startsWith('-')) || `${DEFAULT_FRAMEWORK}-backend`;
const flags = args.filter(arg => arg.startsWith('-'));

/* Validate flags */
let selectedFramework = DEFAULT_FRAMEWORK;

if (flags.length > 0) {
  // Check for invalid flags
  const invalidFlags = flags.filter(flag => !SUPPORTED_FLAGS.includes(flag));

  if (invalidFlags.length > 0) {
    console.error(`❌ Invalid flag(s): ${invalidFlags.join(', ')}`);
    console.error(`\n✅ Supported flags: ${SUPPORTED_FLAGS.join(', ')}`);
    console.error(`\n📖 Usage: npx backend-starter <project-name> [--express|--nextjs|--django|--spring]`);
    process.exit(1);
  }

  // Check for multiple framework flags
  if (flags.length > 1) {
    console.error(`❌ Multiple framework flags detected: ${flags.join(', ')}`);
    console.error(`\n⚠️  Please specify only ONE framework flag.`);
    console.error(`\n✅ Supported flags: ${SUPPORTED_FLAGS.join(', ')}`);
    process.exit(1);
  }

  // Extract framework name from flag (e.g., '--express' -> 'express')
  selectedFramework = flags[0].replace('--', '');
}

/* Check if framework template is available */
const availableTemplates = {
  'express': true,
  'nextjs': false,
  'django': false,
  'spring': false
};

if (!availableTemplates[selectedFramework]) {
  console.error(`❌ Template for '${selectedFramework}' is not available yet.`);
  console.error(`\n✅ Currently available: --express`);
  console.error(`\n🚧 Coming soon: --nextjs, --django, --spring`);
  process.exit(1);
}

console.log(`🚀 Creating ${selectedFramework} backend project: ${projectName}`);

/* Paths */
const targetDir = path.resolve(process.cwd(), projectName);
const templateDir = path.resolve(
  __dirname,
  "../templates/backend/backend-starter-template"
);

/* Validations */
if (fs.existsSync(targetDir)) {
  console.error(`❌ Folder already exists: ${projectName}`);
  process.exit(1);
}

if (!fs.existsSync(templateDir)) {
  console.error(`❌ ${selectedFramework} template not found at: ${templateDir}`);
  process.exit(1);
}

/* Copy Template */
console.log("📦 Copying template files...");
fs.cpSync(templateDir, targetDir, { recursive: true });
console.log(`✅ ${selectedFramework} backend template copied`);

/* Install dependencies */
console.log("📥 Installing dependencies...");
try {
  execSync("npm install", { cwd: targetDir, stdio: "inherit" });
  console.log("✅ Dependencies installed successfully");
} catch (error) {
  console.error("❌ Failed to install dependencies");
  console.error("💡 You can install them manually by running: npm install");
}

/* Git init (optional) */
try {
  execSync("git init", { cwd: targetDir, stdio: "ignore" });
  console.log("🔧 Git initialized");
} catch {
  console.log("⚠️  Git not initialized (git may not be installed)");
}

/* Cross-platform success message */
const isWindows = process.platform === 'win32';
const removeGitCommand = isWindows
  ? 'rmdir /s /q .git'
  : 'rm -rf .git';

console.log(`
✅ ${selectedFramework.charAt(0).toUpperCase() + selectedFramework.slice(1)} backend setup complete!

👉 Next steps:
   cd ${projectName}
   ${removeGitCommand}
   npm run dev

📚 Documentation: https://backend-starter-hb.netlify.app
`);
