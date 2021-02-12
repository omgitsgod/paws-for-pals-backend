import { Request, Response } from 'express';
import { getAuthGoogle, getAuthGoogleCallback, getIndex, getUser, handleLogout } from './usersController';

export default [
  {
    path: '/',
    method: 'get',
    handler: getIndex,
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
  {
    path: '/getUser',
    method: 'get',
    handler: getUser,
  },
  {
    path: '/logout',
    method: 'get',
    handler: handleLogout,
  }
];
