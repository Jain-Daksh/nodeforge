#!/usr/bin/env node

const args = process.argv.slice(2);

const projectName = args[0] || 'backend';

if (!args[0]) {
  console.log(`
⚠ No project name provided.
  Using default project name: ${projectName}
`);
}

console.log('Project name:', projectName);
