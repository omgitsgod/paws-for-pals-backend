import { Request, Response } from "express";
import { getDogsByLocation, getCatsByLocation } from "./PetsController";

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
      if (query.location) {
        const location = query.location.toString();
        const distance = query.distance?.toString() || '10';
        result = await getDogsByLocation(location, distance);
      }
      res.status(200).send(result);
    },
  },
  {
    path: '/Cat',
    method: 'get',
    handler: async ({ query }: Request, res: Response) => {
      let result;
      if (query.location) {
        const location = query.location.toString();
        const distance = query.distance?.toString() || '10';
        result = await getCatsByLocation(location, distance);
      }
      res.status(200).send(result);
    },
  },
];