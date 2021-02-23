import { Request, Response } from 'express';
import passport from 'passport';
import { client } from '../../config';
import { isOnline, addOnline, checkToken, onlineList, removeByToken, addToUsers } from '../../config/logger';
import User from './userModel';

export const getIndex = (req: Request, res: Response) => {
  console.log('req.session: ', req.session)
  if (req.session.passport) {
    res.redirect('/getUser');
  } else {
    console.log('No passport found, destroying session')
    req.session.destroy((err) => err ? console.log(err): null);
    res.end();
  }
};

export const getAuthGoogle = (req: Request, res: Response, next: any) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
};

export const getAuthGoogleCallback = (req: Request, res: Response) => {
  const { user }: any = req;
  const { token } = user;
  req.session.user = req.user;
  req.session.save();
  console.log('id: ', req.session.id);
  console.log('session: ', req.session);
  addToUsers(user);
  isOnline(user) ? null : addOnline(user);
  console.log('Getting User:', user.name);
  console.log('env', process.env)
  console.log('client', process.env.CLIENT);
  res.redirect(client || 'https://paws.netlify.app');
};

export const getUser = (req: Request, res: Response) => {
  if (req.session.passport) {
    console.log('req.session test', req.session);
    console.log('id: ', req.session.id);
    User.findById(req.session.passport.user, (err: Error, user: any) => {
      if (err) {
        console.log(err);
      } else {
        if (checkToken(req.session.user.token)) {
          //const user = checkToken(req.session.user.token)
          console.log('logging in: ', user.name);
          console.log(
            'currently online: ',
            onlineList()
          );
          res.status(200).json(user);
        } else {
          req.session.destroy((err) => err ? console.log(err): null);
        }
      }
    });
  } else {
    res.end();
  }
}

export const handleLogout = (req: Request, res: Response) => {
  console.log(
    'logging out: ',
    checkToken(req.session.user.token)?.name
  );
  removeByToken(req.session.user.token);
  console.log(
    'currently online: ',
    onlineList()
  );
  req.session.destroy((err) =>  err ? console.log(err): null);
  res.sendStatus(200);
}
