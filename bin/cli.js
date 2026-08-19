#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { select } = require('@inquirer/prompts');

function copyDirectory(source, destination, projectName) {
  fs.mkdirSync(destination, { recursive: true });

  const entries = fs.readdirSync(source, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destinationPath, projectName);
    } else {
      let content = fs.readFileSync(sourcePath, 'utf8');

      content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);

      fs.writeFileSync(destinationPath, content);
    }
  }
}

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

  const templatePath = path.join(__dirname, '..', 'templates', language);

  copyDirectory(templatePath, projectPath, projectName);
  console.log(`\n✔ Created project: ${projectPath}`);
}

main();
