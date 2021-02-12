import { Request, Response } from 'express';
import passport from 'passport';
import { client } from '../../config';

export const getAuthGoogle = (req: Request, res: Response, next: any) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
};

export const getAuthGoogleCallback = (req: Request, res: Response) => {
  const { user }: any = req;
  const { token } = user;
  console.log('CONSOLELOG',req.session.id)
  res.redirect(client)
};
