import passport from 'passport';
import passportGoogleOauth, { Profile, VerifyFunction } from 'passport-google-oauth';
import { clientID, clientSecret, host } from '../config';
import User from '../components/users/userModel';

const GoogleStrategy = passportGoogleOauth.OAuth2Strategy;

passport.serializeUser((user: any, done: any) => {
  console.log('Serializer : ', user._id);
  done(null, user._id);
});

passport.deserializeUser((id: any, done: any) => {
  User.findById(id, (err: Error, user: any) => {
    console.log(user);
    if (!err) {
      done(null, user);
    } else {
      done(err, null);
    }
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: `${host}/auth/google/callback`,
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: VerifyFunction
    ) => {
      User.findOne({ oauthID: profile.id }, (err: Error, user: any) => {
        if (err) {
          console.log(err);
        }
        if (!err && user !== null) {
          done(null, user);
        } else {
          user = new User({
            oauthID: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            photo: profile.photos[0].value,
            token: accessToken,
            created: Date.now(),
          });
          user.save((err: Error) => {
            if (err) {
              console.log(err);
            } else {
              console.log('saving user...');
              done(null, user);
            }
          });
        }
      });
    }
  )
);
