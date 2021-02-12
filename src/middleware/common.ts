import { Router, urlencoded, json } from 'express';
import cors from 'cors';
import compression from 'compression';
import favicon from 'serve-favicon';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import url from 'url';
import redis from 'redis';
import connectRedis from 'connect-redis';
import { client, secret, redisUrl } from '../config';
import { connectDb } from '../models/index';
import ('../config/passport');

const redisStore = connectRedis(session);
const redisURL = url.parse(redisUrl);
const redisAuth = redisURL.auth!.split(':');
const redisClient = redis.createClient(
  Number(redisURL.port),
  String(redisURL.hostname),
  { no_ready_check: true }
);

export const handleCors = (router: Router) => {
  router.use(cors({ credentials: true, origin: true }));
};

export const handleBodyRequestParsing = (router: Router) => {
  router.use(urlencoded({ extended: true }));
  router.use(json());
};
export const handleCompression = (router: Router) => {
  router.use(compression());
};
export const handleFavicon = (router: Router) => {
  router.use(favicon(path.join(process.cwd(), '/public', 'favicon.ico')));
};
export const handleRedis = (router: Router) => {
  redisClient.auth(redisAuth[1], () => console.log('Redis Authorized'));
  redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
  });
  redisClient.on('connect', () => {
    console.log('Connected to Redis');
  });
};
export const handleSession = (router: Router) => {
  router.use(
    session({
      secret,
      name: 'PawsForPals',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false, maxAge: 600000 },
      store: new redisStore({
        url: process.env.REDIS_URL,
        client: redisClient,
      }),
    })
  );
};
export const handlePassport = (router: Router) => {
  router.use(passport.initialize());
  router.use(passport.session());
};
export const handleAuth = (router: Router) => {
  router.use(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: client, session: true })
  );
};
export const handleDB = (router: Router) => {
  connectDb()
    .then(() => console.log('connection to DB succesful'))
    .catch((err: Error) => console.log(err));
};
