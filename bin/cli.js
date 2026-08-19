#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { select } = require('@inquirer/prompts');
const { execSync } = require('child_process');

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

  // -------------------------
  // Language
  // -------------------------

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

  // -------------------------
  // Module System
  // -------------------------

  let moduleSystem = null;

  if (language === 'javascript') {
    moduleSystem = await select({
      message: 'Select module system:',
      choices: [
        {
          name: 'CommonJS',
          value: 'commonjs',
        },
        {
          name: 'ES Modules',
          value: 'module',
        },
      ],
    });

    console.log('Module system:', moduleSystem);
  }

  // -------------------------
  // Database
  // -------------------------

  const database = await select({
    message: 'Select database setup:',
    choices: [
      {
        name: 'Sequelize ORM',
        value: 'sequelize',
      },
      {
        name: 'PostgreSQL',
        value: 'postgres',
      },
      {
        name: 'No Database',
        value: 'none',
      },
    ],
  });

  console.log('Database:', database);

  // -------------------------
  // Template
  // -------------------------

  let templatePath;

  if (language === 'javascript') {
    templatePath = path.join(
      __dirname,
      '..',
      'templates',
      'javascript',
      moduleSystem,
    );
  } else {
    templatePath = path.join(__dirname, '..', 'templates', 'typescript');
  }

  // -------------------------
  // Project Path
  // -------------------------

  const projectPath = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.error(`\n✖ Directory already exists: ${projectPath}`);

    process.exit(1);
  }

  fs.mkdirSync(projectPath);

  // -------------------------
  // Copy Template
  // -------------------------
  copyDirectory(templatePath, projectPath, projectName);

  if (database !== 'none') {
    const databaseTemplatePath = path.join(
      __dirname,
      '..',
      'templates',
      'database',
      database,
    );
  }
  copyDirectory(databaseTemplatePath, projectPath, projectName);
  // -------------------------
  // Install Dependencies
  // -------------------------

  console.log('\nInstalling dependencies...\n');

  execSync('npm install', {
    cwd: projectPath,
    stdio: 'inherit',
  });

  // -------------------------
  // Success
  // -------------------------

  console.log(`
✔ Project created successfully!

  Project: ${projectName}
  Language: ${language}${language === 'javascript' ? `\n  Module system: ${moduleSystem}` : ''}
  Database: ${database}

Next steps:

  cd ${projectName}
  npm run dev
`);

  console.log(`✔ Created project: ${projectPath}`);
}

main();
