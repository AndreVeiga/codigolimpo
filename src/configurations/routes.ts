import express, { Request, Response } from 'express';
const routes = express();

routes
  .route('/variables')
  .get((req: Request, res: Response) => {
    
  })


export default () => routes