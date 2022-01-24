# Node Typescript Starter Kit

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

# Step 1 — Initializing the Project

```bash
- npm init -y
```

# Step 2 — Configuring the TypeScript Compiler

```bash
- npm i -g typescript
- npm install --save-dev typescript
- npx tsc --init (default) OR
- npx tsc --init --outDir build \
  --moduleResolution node \
  --esModuleInterop --resolveJsonModule \
  --module commonjs --noImplicitAny true
```

# Step 3 — Configuring Typescript Linting with eslint

```bash
- npm install --save-dev eslint
- npx eslint --init
```

# Step 4 — Installing the devDependencies

```bash
- npm install typescript --save-dev
- npm install ts-node --save-dev
- npm install nodemon --save-dev
- npm install @types/node --save-dev
```

# Step 5 — Update the package.json File

```json
"scripts": {
  "start": "cross-env NODE_ENV=development nodemon dist/server.js",
  "build": "rm -rf ./dist && tsc",
  "dev": "cross-env NODE_ENV=development nodemon && ts-node src/server.ts",
  "lint": "eslint .",
  "lint:fix": "tsc --noEmit && eslint \"**/\*.{js,ts}\" --quiet --fix",
  }
```
