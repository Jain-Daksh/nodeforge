#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { select } = require('@inquirer/prompts');

async function main() {
  const args = process.argv.slice(2);

  const projectName = args[0] || 'backend';

  if (!args[0]) {
    console.log(`
⚠ No project name provided.
  Using default project name: ${projectName}
`);
  }

  console.log('Project name:', projectName);

  const language = await select({
    message: 'Select language:',
    choices: [
      {
        name: 'TypeScript',
        value: 'typescript',
      },
      {
        name: 'JavaScript',
        value: 'javascript',
      },
    ],
  });

  console.log('Language:', language);

  const projectPath = path.resolve(process.cwd(), projectName);

  fs.mkdirSync(projectPath);

  const directories = [
    'src',
    'src/config',
    'src/models',
    'src/controllers',
    'src/service',
    'src/routes',
    'src/serializer',
    'src/validations',
    'src/utils',
    'src/seed',
  ];

  for (const directory of directories) {
    const directoryPath = path.join(projectPath, directory);

    fs.mkdirSync(directoryPath, { recursive: true });
  }

  console.log(`\n✔ Created project: ${projectPath}`);
}

main();
