import { Request, Response } from 'express';
import { getShelter, getShelters } from './sheltersController';

export default [
  {
    path: '/shelter',
    method: 'get',
    handler: getShelter,
  },
  {
    path: '/shelters',
    method: 'get',
    handler: getShelters,
  },
];
