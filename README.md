# 🚀 Backend Starter CLI

A powerful, cross-platform CLI tool to quickly scaffold backend projects with industry-standard templates for **Express**, **Next.js**, **Django**, and **Spring Boot**.

[![npm version](https://img.shields.io/npm/v/create-express-backend-hb-cli.svg)](https://www.npmjs.com/package/create-express-backend-hb-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)

---

## ✨ Features

✅ **Multi-Framework Support** - Express, Next.js, Django, Spring Boot (coming soon)  
✅ **Cross-Platform** - Works seamlessly on Windows, macOS, and Linux  
✅ **Production-Ready Templates** - Industry-standard project structure  
✅ **Zero Configuration** - Get started in seconds  
✅ **Smart Validation** - Helpful error messages and flag validation  
✅ **Auto Setup** - Automatic dependency installation and Git initialization  

---

## 🎯 Quick Start

### Create a new Express backend project:

```bash
npx create-express-backend-hb-cli my-backend --express
cd my-backend
npm run dev
```

That's it! Your backend is ready to go. 🎉

---

## 📦 Installation

### Option 1: Use with npx (Recommended)
```bash
npx create-express-backend-hb-cli <project-name> [--express|--nextjs|--django|--spring]
```

### Option 2: Global Installation
```bash
npm install -g create-express-backend-hb-cli
backend-starter <project-name> [--express|--nextjs|--django|--spring]
```

---

## 🛠️ Usage

### Basic Syntax:
```bash
npx create-express-backend-hb-cli <project-name> [framework-flag]
```

### Examples:

#### Express Backend (Default)
```bash
npx create-express-backend-hb-cli my-api --express
```

#### Next.js Backend (Coming Soon)
```bash
npx create-express-backend-hb-cli my-nextjs-app --nextjs
```

#### Django Backend (Coming Soon)
```bash
npx create-express-backend-hb-cli my-django-api --django
```

#### Spring Boot Backend (Coming Soon)
```bash
npx create-express-backend-hb-cli my-spring-api --spring
```

---

## 🎨 Available Templates

| Framework | Status | Flag | Description |
|-----------|--------|------|-------------|
| **Express** | ✅ Available | `--express` | Node.js + Express with MongoDB, JWT auth, validation |
| **Next.js** | 🚧 Coming Soon | `--nextjs` | Next.js API routes with TypeScript |
| **Django** | 🚧 Coming Soon | `--django` | Django REST Framework with PostgreSQL |
| **Spring Boot** | 🚧 Coming Soon | `--spring` | Spring Boot with JPA and MySQL |

---

## 📂 Express Template Features

The Express template includes:

- ✅ **Authentication System** - JWT-based auth with refresh tokens
- ✅ **MongoDB Integration** - Mongoose ODM with connection pooling
- ✅ **Input Validation** - Express-validator middleware
- ✅ **Error Handling** - Centralized error handler
- ✅ **Rate Limiting** - Protection against brute-force attacks
- ✅ **Logging** - Winston + Morgan for comprehensive logging
- ✅ **Security** - Helmet, CORS, cookie-parser
- ✅ **Email Service** - Nodemailer integration
- ✅ **Environment Config** - dotenv configuration
- ✅ **ESLint** - Code quality and consistency

---

## 🖥️ Cross-Platform Support

This CLI is fully tested and works on:

- ✅ **Windows** (PowerShell, CMD, Git Bash)
- ✅ **macOS** (Terminal, iTerm2)
- ✅ **Linux** (Bash, Zsh)

### Platform-Specific Commands:

The CLI automatically detects your platform and provides the correct commands:

**Windows:**
```bash
cd my-backend
rmdir /s /q .git
npm run dev
```

**macOS/Linux:**
```bash
cd my-backend
rm -rf .git
npm run dev
```

---

## 🔧 Requirements

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0

---

## 📖 Documentation

For detailed documentation, visit: [https://docs.testdog.in](https://docs.testdog.in)

---

## 🐛 Troubleshooting

### Issue: "Invalid flag" error
**Solution:** Make sure you're using one of the supported flags:
```bash
--express | --nextjs | --django | --spring
```

### Issue: "Template not available" error
**Solution:** Currently, only `--express` is available. Other templates are coming soon!

### Issue: Windows-specific errors
**Solution:** This has been fixed in v1.4.0+. Make sure you're using the latest version:
```bash
npm install -g create-express-backend-hb-cli@latest
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Himanshu Bhindoriya**  
Full-Stack Developer  
🚀 Learning • Building • Improving

---

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- All contributors and users of this CLI

---

**Made with ❤️ by Himanshu Bhindoriya**

