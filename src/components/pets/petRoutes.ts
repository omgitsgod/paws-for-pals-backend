import { Request, Response } from 'express';
import { getDogs, getCats } from "./petsController";

export default [
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
