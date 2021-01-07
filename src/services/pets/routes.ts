import { Request, Response } from 'express';
import { getDogsWithOptions, getCatsWithOptions } from './PetsController';

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
    handler: async ({ query }: Request, res: Response) => {
      let result;
      const location = query.location?.toString();
      const distance = query.distance?.toString();
      const age = query.age?.toString();
      result = await getDogsWithOptions(location, distance, age);
      res.status(200).send(result);
    },
  },
  {
    path: '/Cat',
    method: 'get',
    handler: async ({ query }: Request, res: Response) => {
      let result;
      const location = query.location?.toString();
      const distance = query.distance?.toString();
      const age = query.age?.toString();
      const options = { location, distance };
      result = await getCatsWithOptions(location, distance, age);
      res.status(200).send(result);
    },
  },
];
