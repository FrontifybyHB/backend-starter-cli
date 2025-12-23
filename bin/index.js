#!/usr/bin/env node

const { execSync } = require("child_process");

const projectName = process.argv[2];

if (!projectName) {
    console.log("❌ Please provide a project name");
    console.log("👉 Example: npx backend-starter my-project");
    process.exit(1);
}

console.log("🚀 Creating backend project:", projectName);

execSync(
    `git clone https://github.com/FrontifybyHB/backend-starter.git ${projectName}`,
    { stdio: "inherit" }
);

console.log("✅ Backend starter downloaded successfully");
console.log("👉 cd", projectName);
console.log("👉 npm install");
console.log("👉 npm run dev");
