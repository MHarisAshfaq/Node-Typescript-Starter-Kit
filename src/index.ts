import express, { Application } from 'express';

const app: Application = express();

app.listen(process.env.PORT, () => {
  console.log('Node with Typescript');
});
