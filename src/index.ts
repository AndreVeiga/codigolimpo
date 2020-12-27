import express from 'express';
import routes from './configurations/routes'

const app = express();
const router = express.Router();

app.use(express.json());

router.use(routes);

console.log('Servidor rodando...');