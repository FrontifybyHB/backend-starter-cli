# Changelog

All notable changes to this project will be documented in this file.

## [1.4.0] - 2026-01-23

### 🎉 Major Changes

#### Package Renamed
- **OLD:** `create-express-backend-hb-cli`
- **NEW:** `backend-starter-hb`
- Reason: Shorter, easier to remember, and faster to type

### ✨ New Features

#### Cross-Platform Support
- ✅ Full Windows compatibility (PowerShell, CMD, Git Bash)
- ✅ macOS support (Terminal, iTerm2)
- ✅ Linux support (Bash, Zsh)
- Platform-specific commands in success messages

#### Flag Validation System
- ✅ Validates framework flags: `--express`, `--nextjs`, `--django`, `--spring`
- ✅ Detects invalid flags with helpful error messages
- ✅ Prevents multiple framework flags
- ✅ Shows available vs. coming soon templates

#### Better Error Handling
- ✅ Graceful npm install failure handling
- ✅ Git initialization error handling
- ✅ Template availability checking
- ✅ Clear, actionable error messages

#### Multiple Command Aliases
- ✅ `backend-starter-hb` (primary command)
- ✅ `backend-starter` (shorter alias)

### 🐛 Bug Fixes

#### Windows-Specific Issues
- Fixed: `rm -rf .git` command failing on Windows
- Fixed: Path separator issues
- Fixed: Command execution errors on Windows
- Solution: Platform detection and appropriate commands

#### Flag Handling
- Fixed: Flags were being ignored
- Fixed: No validation for invalid flags
- Fixed: No error messages for unsupported frameworks

### 📝 Documentation

- ✅ New comprehensive README.md
- ✅ Migration guide for users of old package name
- ✅ Windows fix explanation document
- ✅ Test scripts for both Unix and Windows
- ✅ Updated homepage URL

### 🔧 Technical Improvements

- Better argument parsing
- Framework selection logic
- Template availability mapping
- Cross-platform command generation
- Enhanced logging and user feedback

---

## [1.3.1] - Previous Version

### Features
- Basic Express template scaffolding
- npm dependency installation
- Git initialization
- Simple project setup

### Known Issues
- ❌ Windows compatibility problems
- ❌ No flag validation
- ❌ Long package name
- ❌ Limited error handling

---

## Migration from 1.3.1 to 1.4.0

### For npx Users
Simply use the new package name:
```bash
npx backend-starter-hb my-project --express
```

### For Global Installation Users
```bash
# Uninstall old
npm uninstall -g create-express-backend-hb-cli

# Install new
npm install -g backend-starter-hb
```

---

## Upcoming Features

### Version 1.5.0 (Planned)
- [ ] Next.js template support
- [ ] TypeScript variants
- [ ] Interactive CLI mode
- [ ] Custom template selection

### Version 1.6.0 (Planned)
- [ ] Django template support
- [ ] Python virtual environment setup
- [ ] Database configuration wizard

### Version 1.7.0 (Planned)
- [ ] Spring Boot template support
- [ ] Java/Kotlin options
- [ ] Maven/Gradle selection

---

## Links

- **npm Package:** https://www.npmjs.com/package/backend-starter-hb
- **Documentation:** https://backend-starter-hb.netlify.app
- **GitHub:** https://github.com/work-by-himanshu/backend-starter-cli
- **Issues:** https://github.com/work-by-himanshu/backend-starter-cli/issues

---

**Author:** Himanshu Bhindoriya  
**License:** MIT

