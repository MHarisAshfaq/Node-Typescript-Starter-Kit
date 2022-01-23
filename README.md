# node-typescript-setup

# Prerequisites
To build and run this app locally you will need a few things:
Install Node.js
Install MongoDB

Step 1 — Initializing the Project
npm init OR npm init -y

Step 2 — Configuring the TypeScript Compiler
npm i -g typescript
npm install --save-dev typescript
npx tsc --init OR
npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true

Step 3 — Configuring Typescript Linting with eslint
npm install --save-dev eslint
npx eslint --init

Step 4 — Installing the devDependencies
npm install typescript --save-dev
npm install ts-node --save-dev 
npm install @types/node --save-dev
