# Nodecli

A simple CLI tool for quickly scaffolding Node.js backend projects with a predefined and organized project structure.

Nodecli helps developers avoid repeatedly creating the same folders, files, and basic configuration when starting a new backend project.

## Features

- 🚀 Node.js backend project scaffolding
- JavaScript support
- TypeScript support
- Interactive CLI setup
- Custom project names
- Default project name support
- Predefined backend folder structure
- Controllers
- Services
- Routes
- Models
- Serializers
- Validations
- Utils
- Seed structure

## Installation & Usage

You don't need to install Nodecli globally. You can run it directly using `npx`.

### Create a project with a custom name

```bash
npx @jain_daksh/nodecli my-backend
```

### Start with the default project name

```bash
npx @jain_daksh/nodecli
```

Nodecli will guide you through the setup and allow you to select the project type.

## Generated Structure

A generated project follows a structure similar to:

```text
backend/
│
├── controllers/
├── services/
├── routes/
├── models/
├── serializers/
├── validations/
├── utils/
├── seed/
│
├── app
├── server
├── .env
├── .gitignore
└── package.json
```

The structure is designed to keep different responsibilities separated from the beginning of the project.

## JavaScript & TypeScript

Nodecli currently supports:

- JavaScript
- TypeScript

During the CLI setup, you can select the project type you want to use.

## How It Works

The basic workflow is:

```text
Developer
   ↓
Nodecli
   ↓
Project Name
   ↓
Select JavaScript / TypeScript
   ↓
Template Selection
   ↓
Project Generation
   ↓
Ready-to-Code Backend
```

Nodecli takes the project configuration and automatically generates the required folders and files.

## Why I Built Nodecli

Nodecli started with a simple problem.

Every time I started a Node.js backend project, I found myself creating the same folders and files again:

- Controllers
- Services
- Routes
- Utilities
- Configuration

The setup itself wasn't difficult, but repeating the same process for every project felt unnecessary.

So I decided to automate it.

That idea became **Nodecli — my first published npm package.**

## Tech Stack

Nodecli is built using:

- Node.js
- JavaScript
- TypeScript
- npm
- npx
- Inquirer
- Node.js File System APIs

## Roadmap

Nodecli is currently in its early stage, and I plan to gradually expand its capabilities.

### Database Setup

Add options to initialize database-related configuration.

Potential support:

- PostgreSQL
- MySQL
- MongoDB

### ORM Support

Add optional ORM setup for generated projects.

Potential options:

- Prisma
- Sequelize
- TypeORM

### Docker Setup

Generate Docker-related configuration for Node.js backend projects.

### Redis Setup

Add optional Redis configuration for projects that require caching or other Redis-based functionality.

### Authentication Boilerplate

Add optional authentication setup, including:

- JWT authentication
- Authentication middleware
- User structure
- Protected routes

### Testing Setup

Add a ready-to-use testing setup.

Potential support:

- Jest
- Supertest

### More Templates

Add additional project templates for different types of Node.js applications.

### More CLI Options

Make project generation more configurable so developers can choose which features they want during project creation.

### Custom Project Structure

Allow developers to customize the generated folder structure according to their project requirements.

## Long-Term Goal

The long-term goal is to make Nodecli more than just a basic project generator.

I want Nodecli to become a flexible CLI that helps developers quickly create a complete Node.js backend foundation based on their project requirements.

## npm Package

You can find Nodecli on npm:

[@jain_daksh/nodecli on npm](https://www.npmjs.com/package/@jain_daksh/nodecli?utm_source=chatgpt.com)

Run it directly with:

```bash
npx @jain_daksh/nodecli
```

## Feedback

Nodecli is an early project, and I plan to improve it over time.

If you try Nodecli, feedback, suggestions, and ideas for new features are always welcome.
