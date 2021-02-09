import { Request, Response } from 'express';
import { getDogs, getCats } from "./petsController";

export default [
  {
    path: '/',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('Pets!');
    },
  },
  {
    path: '/Dog',
    method: 'get',
    handler: getDogs
  },
  {
    path: '/Cat',
    method: 'get',
    handler: getCats
  },
];
