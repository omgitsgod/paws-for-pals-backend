type petQeury = {
  location: string | undefined;
  distance: string | undefined;
  age: string | undefined;
};

export = {}

declare module 'express-session' {
  interface SessionData {
    user: any,
    passport: any,
  }
}
