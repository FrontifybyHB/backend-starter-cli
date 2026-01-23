# 📦 Publishing Checklist for backend-starter-hb v1.4.0

## ✅ Pre-Publishing Checklist

### 1. Verify Package Name Change
- [x] Package renamed from `create-express-backend-hb-cli` to `backend-starter-hb`
- [x] Package name is available on npm (verified: ✅ AVAILABLE)
- [x] Both command aliases configured: `backend-starter-hb` and `backend-starter`

### 2. Test Locally

#### On macOS/Linux:
```bash
cd backend-starter-cli
node bin/index.js test-project --express
cd test-project
npm install
npm run dev
cd ..
rm -rf test-project
```

#### On Windows (if available):
```bash
cd backend-starter-cli
node bin/index.js test-project --express
cd test-project
npm install
npm run dev
cd ..
rmdir /s /q test-project
```

### 3. Test Flag Validation
```bash
# Test invalid flag (should show error)
node bin/index.js test --invalid-flag

# Test multiple flags (should show error)
node bin/index.js test --express --nextjs

# Test unavailable template (should show error)
node bin/index.js test --nextjs

# Test valid flag (should work)
node bin/index.js test --express
rm -rf test
```

### 4. Verify Documentation
- [x] README.md updated with new package name
- [x] CHANGELOG.md created
- [x] MIGRATION_GUIDE.md created
- [x] All links point to correct URLs
- [x] Homepage URL updated: https://backend-starter-hb.netlify.app

---

## 🚀 Publishing Steps

### Step 1: Login to npm
```bash
npm login
# Enter your npm credentials
```

### Step 2: Verify Package Contents
```bash
cd backend-starter-cli
npm pack --dry-run
```

This will show you what files will be included in the package.

### Step 3: Publish to npm
```bash
npm publish
```

### Step 4: Verify Publication
```bash
npm view backend-starter-hb
```

### Step 5: Test Installation
```bash
# Test with npx
npx backend-starter-hb@latest test-project --express

# Test global installation
npm install -g backend-starter-hb@latest
backend-starter-hb test-project2 --express
backend-starter test-project3 --express
```

---

## 📢 Post-Publishing Tasks

### 1. Update GitHub Repository
```bash
git add .
git commit -m "v1.4.0: Package renamed to backend-starter-hb with Windows support"
git tag v1.4.0
git push origin main
git push origin v1.4.0
```

### 2. Create GitHub Release
- Go to: https://github.com/work-by-himanshu/backend-starter-cli/releases/new
- Tag: `v1.4.0`
- Title: `v1.4.0 - Package Renamed & Windows Support`
- Description: Copy from CHANGELOG.md

### 3. Update Documentation Website
- Update https://backend-starter-hb.netlify.app with:
  - New package name
  - Installation instructions
  - Migration guide
  - Windows compatibility notes

### 4. Announce the Update
- [ ] Post on Twitter/X
- [ ] Post on LinkedIn
- [ ] Update portfolio/website
- [ ] Share in relevant Discord/Slack communities

---

## 🧪 Testing Commands Reference

### Valid Commands (Should Work)
```bash
npx backend-starter-hb my-project --express
npx backend-starter-hb my-project
backend-starter-hb my-project --express
backend-starter my-project --express
```

### Invalid Commands (Should Show Helpful Errors)
```bash
npx backend-starter-hb my-project --react
npx backend-starter-hb my-project --express --nextjs
npx backend-starter-hb my-project --nextjs
```

---

## 📊 Package Information

- **Package Name:** backend-starter-hb
- **Version:** 1.4.0
- **License:** MIT
- **Author:** Himanshu Bhindoriya
- **Homepage:** https://backend-starter-hb.netlify.app
- **Repository:** https://github.com/work-by-himanshu/backend-starter-cli
- **npm URL:** https://www.npmjs.com/package/backend-starter-hb

---

## 🎯 Success Criteria

After publishing, verify:
- [ ] Package appears on npm: https://www.npmjs.com/package/backend-starter-hb
- [ ] `npx backend-starter-hb` works without installation
- [ ] Both command aliases work after global installation
- [ ] Windows users can successfully create projects
- [ ] Flag validation works correctly
- [ ] Error messages are helpful and clear
- [ ] Documentation is accessible and accurate

---

## 🆘 Rollback Plan (If Needed)

If something goes wrong:

1. **Unpublish within 72 hours:**
   ```bash
   npm unpublish backend-starter-hb@1.4.0
   ```

2. **Deprecate the version:**
   ```bash
   npm deprecate backend-starter-hb@1.4.0 "This version has issues, please use 1.3.1"
   ```

3. **Publish a patch:**
   ```bash
   # Fix the issue
   npm version patch
   npm publish
   ```

---

## 📝 Notes

- The old package name `create-express-backend-hb-cli` can be deprecated after confirming the new package works
- Keep monitoring npm downloads and GitHub issues for the first week
- Be ready to quickly patch any critical bugs

---

**Ready to publish? Let's go! 🚀**

