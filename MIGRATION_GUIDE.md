# 📦 Package Name Change - Migration Guide

## 🎉 We've Shortened the Package Name!

The package has been renamed from:
- ❌ **OLD:** `create-express-backend-hb-cli` (too long!)
- ✅ **NEW:** `backend-starter-hb` (short and sweet!)

---

## 🚀 What Changed?

### Package Name
```bash
# OLD (Still works but deprecated)
npx create-express-backend-hb-cli my-project --express

# NEW (Recommended)
npx backend-starter-hb my-project --express
```

### Global Installation
```bash
# OLD
npm install -g create-express-backend-hb-cli

# NEW
npm install -g backend-starter-hb
```

### Command Usage
```bash
# After global installation, you can use either:
backend-starter-hb my-project --express
# OR the shorter alias:
backend-starter my-project --express
```

---

## 🔄 How to Migrate

### If You're Using npx (No Action Needed!)
Just use the new package name:
```bash
npx backend-starter-hb my-project --express
```

### If You Have It Installed Globally
1. **Uninstall the old package:**
   ```bash
   npm uninstall -g create-express-backend-hb-cli
   ```

2. **Install the new package:**
   ```bash
   npm install -g backend-starter-hb
   ```

3. **Verify installation:**
   ```bash
   backend-starter-hb --version
   # or
   backend-starter --version
   ```

---

## ✨ New Features in v1.4.0

Along with the name change, we've added:

✅ **Proper Flag Validation** - Clear error messages for invalid flags  
✅ **Cross-Platform Support** - Works perfectly on Windows, Mac, and Linux  
✅ **Multiple Command Aliases** - Use `backend-starter-hb` or `backend-starter`  
✅ **Better Error Handling** - Helpful messages when things go wrong  
✅ **Template Availability Check** - Know which templates are ready to use  

---

## 📖 Updated Documentation

- **Homepage:** https://backend-starter-hb.netlify.app
- **npm Package:** https://www.npmjs.com/package/backend-starter-hb
- **GitHub:** https://github.com/work-by-himanshu/backend-starter-cli

---

## ❓ FAQ

### Q: Will the old package name still work?
**A:** For now, yes, but it's deprecated. We recommend switching to `backend-starter-hb` for the latest features and updates.

### Q: Do I need to update my existing projects?
**A:** No! This only affects how you create NEW projects. Your existing projects are unaffected.

### Q: Why the name change?
**A:** The old name was too long and hard to type. `backend-starter-hb` is:
- ✅ Shorter and easier to remember
- ✅ Faster to type
- ✅ More professional
- ✅ Better for SEO and discoverability

### Q: What does "hb" stand for?
**A:** It stands for **Himanshu Bhindoriya** (the creator's initials).

---

## 🎯 Quick Reference

| Action | Command |
|--------|---------|
| Create new project | `npx backend-starter-hb my-project --express` |
| Global install | `npm install -g backend-starter-hb` |
| Check version | `backend-starter-hb --version` |
| Get help | `backend-starter-hb --help` |

---

## 🙏 Thank You!

Thank you for using Backend Starter HB! We hope this change makes your development experience even better.

If you have any questions or issues, please:
- 📧 Open an issue on GitHub
- 💬 Check the documentation
- 🌟 Star the repo if you find it useful!

---

**Made with ❤️ by Himanshu Bhindoriya**

