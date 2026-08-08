#!/usr/bin/env node

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
}

main();
