@echo off
REM Test script for backend-starter CLI on Windows
REM This script tests various scenarios to ensure the CLI works correctly on Windows

echo 🧪 Testing Backend Starter CLI (Windows)
echo ================================
echo.

REM Test 1: Valid flag (--express)
echo Test 1: Valid flag (--express)
node bin/index.js test-express --express
if %errorlevel% equ 0 (
  echo ✅ Test 1 passed
  rmdir /s /q test-express 2>nul
) else (
  echo ❌ Test 1 failed
)
echo.

REM Test 2: Invalid flag
echo Test 2: Invalid flag (--react)
node bin/index.js test-invalid --react
if %errorlevel% neq 0 (
  echo ✅ Test 2 passed (correctly rejected invalid flag)
) else (
  echo ❌ Test 2 failed (should have rejected invalid flag)
)
echo.

REM Test 3: Multiple flags
echo Test 3: Multiple flags (--express --nextjs)
node bin/index.js test-multiple --express --nextjs
if %errorlevel% neq 0 (
  echo ✅ Test 3 passed (correctly rejected multiple flags)
) else (
  echo ❌ Test 3 failed (should have rejected multiple flags)
)
echo.

REM Test 4: Unavailable template
echo Test 4: Unavailable template (--nextjs)
node bin/index.js test-nextjs --nextjs
if %errorlevel% neq 0 (
  echo ✅ Test 4 passed (correctly showed template unavailable)
) else (
  echo ❌ Test 4 failed (should have shown template unavailable)
)
echo.

REM Test 5: Default (no flag)
echo Test 5: Default (no flag)
node bin/index.js test-default
if %errorlevel% equ 0 (
  echo ✅ Test 5 passed
  rmdir /s /q test-default 2>nul
) else (
  echo ❌ Test 5 failed
)
echo.

echo ================================
echo 🎉 All tests completed!
pause

