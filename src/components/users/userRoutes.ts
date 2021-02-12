import { Request, Response } from 'express';
import { getAuthGoogle, getAuthGoogleCallback } from './usersController';

export default [
  {
    path: '/user',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('User!');
    },
  },
  {
    path: '/auth/google',
    method: 'get',
    handler: getAuthGoogle,
  },
  {
    path: '/auth/google/callback',
    method: 'get',
    handler: getAuthGoogleCallback,
  },
];
