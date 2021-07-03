import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('✔ Server Running on port 3333');
});
