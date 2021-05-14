import { Request, Response } from 'express';
import { getShelter } from './sheltersController';

export default [
  {
    path: '/shelter',
    method: 'get',
    handler: getShelter,
  },
];
