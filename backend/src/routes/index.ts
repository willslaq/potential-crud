import { Router } from 'express';
import developersRouter from './developers.routes';

const routes = Router();

routes.use('/developers', developersRouter);

export default routes;
