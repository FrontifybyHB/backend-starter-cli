#!/bin/bash

# Test script for backend-starter CLI
# This script tests various scenarios to ensure the CLI works correctly

echo "🧪 Testing Backend Starter CLI"
echo "================================"
echo ""

# Test 1: Valid flag (--express)
echo "Test 1: Valid flag (--express)"
node bin/index.js test-express --express
if [ $? -eq 0 ]; then
  echo "✅ Test 1 passed"
  rm -rf test-express
else
  echo "❌ Test 1 failed"
fi
echo ""

# Test 2: Invalid flag
echo "Test 2: Invalid flag (--react)"
node bin/index.js test-invalid --react
if [ $? -ne 0 ]; then
  echo "✅ Test 2 passed (correctly rejected invalid flag)"
else
  echo "❌ Test 2 failed (should have rejected invalid flag)"
fi
echo ""

# Test 3: Multiple flags
echo "Test 3: Multiple flags (--express --nextjs)"
node bin/index.js test-multiple --express --nextjs
if [ $? -ne 0 ]; then
  echo "✅ Test 3 passed (correctly rejected multiple flags)"
else
  echo "❌ Test 3 failed (should have rejected multiple flags)"
fi
echo ""

# Test 4: Unavailable template
echo "Test 4: Unavailable template (--nextjs)"
node bin/index.js test-nextjs --nextjs
if [ $? -ne 0 ]; then
  echo "✅ Test 4 passed (correctly showed template unavailable)"
else
  echo "❌ Test 4 failed (should have shown template unavailable)"
fi
echo ""

# Test 5: Default (no flag)
echo "Test 5: Default (no flag)"
node bin/index.js test-default
if [ $? -eq 0 ]; then
  echo "✅ Test 5 passed"
  rm -rf test-default
else
  echo "❌ Test 5 failed"
fi
echo ""

echo "================================"
echo "🎉 All tests completed!"

