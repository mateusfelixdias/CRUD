import express from 'express';
import { read } from '../api/read';
import { create } from '../api/create';
import { destroy } from '../api/delete';
import { update } from '../api/update';

const routes = express.Router();

routes.post('/users', create);

routes.get('/users', read);

routes.put('/users/:id', update);

routes.delete('/users/:id', destroy);

export { routes };