# Node Typescript Starter Kit

Basic Starter Kit for building Node applications with Typescript

# Getting Started

To get started clone repo locally and run `npm install` OR `yarn install` at the root of the repo.
Run `npm run dev` OR `yarn dev` , if everything completes successfully you should see `Node with Typescript` logged to the console.

# Node Typescript Setup

# Prerequisites

To build and run this app locally you will need a few things:

```bash
- Install Node.js
- Install MongoDB
```

# Step 1 — Add .gitignore, .prettierignore and .eslintignore file in the Project

- .gitignore

```bash
- touch .gitignore
```

Add the following to your .gitignore file

```json
# Dependencies
node_modules

# Ignore built ts files
dist/**/*

# ignore yarn.lock
yarn.lock

# yarn error logs
yarn-error.log

# Environment varibales
.env*
!.env*.example

# Code coverage
coverage

```

- .eslintignore

```bash
- touch .eslintignore
```

Add the following to your .eslintignore file

```json
node_modules
bin
# build artefacts
build/*
coverage/*
# data definition files
**/*.d.ts
# custom definition files
/src/types/
```

- .prettierignore

```bash
- touch .prettierignore
```

```json
node_modules
build
coverage
```

# Step 2 — Initializing the Project

```bash
- npm init -y
```

# Step 3 — Configuring the TypeScript Compiler

```bash
- npm i -g typescript
```

```bash
- npm install --save-dev typescript
```

```bash
- npx tsc --init (default)
```

OR

```bash
npx tsc --init --outDir build \
  --moduleResolution node \
  --esModuleInterop --resolveJsonModule \
  --module commonjs --noImplicitAny true
```

# Step 4 — Configuring Typescript Linting with eslint

- NPM

```bash
- npm install --save-dev eslint
```

```bash
- npx eslint --init
```

- YARN

```bash
- yarn add -D eslint
```

```bash
- npx eslint --init
```

This will ask you a series of questions. For this project we’ll answer the following:

- How would you like to use ESLint?: To check syntax and find problems
- What type of modules does your project use?: JavaScript modules (import/export)
- Which framework does your project use?: None of these
- Does your project use TypeScript?: Yes
- Where does your code run?: Node
- What format do you want your config file to be in?: JavaScript
- Finally, you will be prompted to install some additioanl eslint libraries. Choose Yes.

# Step 5 — Installing the devDependencies

- NPM

```bash
- npm install --save-dev typescript ts-node nodemon @types/node cross-env prettier
```

- YARN

```bash
- yarn add -D typescript ts-node nodemon @types/node
```

# Step 5 — Add a .prettierrc.json File

```bash
- touch .eslintignore
```

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

# Step 6 — Update the package.json File

```json
"scripts": {
  "start": "cross-env NODE_ENV=development nodemon build/index.js",
  "build": "rm -rf ./build && tsc",
  "dev": "cross-env NODE_ENV=development nodemon && ts-node src/index.ts",
  "lint": "eslint .",
  "lint:fix": "tsc --noEmit && eslint \"**/\*.{js,ts}\" --quiet --fix",
  "prettier": "prettier --check \"**/*.{js,ts}\"",
  "prettier:fix": "prettier --write \"**/*.{js,ts}\"",
  "prepare": "husky install"
  }
```

# Step 6 — Setting up pre-commit hook

- NPM

```bash
npm install --save-dev husky lint-staged

```

- YARN

```bash
npm i -D husky lint-staged

```

- Open `package.json` file and add the following sections:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{ts,js}": [
    "prettier --write",
    "eslint --fix",
    "git add"
  ]
}
```
