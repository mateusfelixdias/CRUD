import cors from 'cors';
import express from 'express';
import { routes } from './routes/router';
import { connection } from './database/connection';

const app = express();

connection();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('server running on port 3000!');
});