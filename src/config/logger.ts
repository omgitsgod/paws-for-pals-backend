export let loggedIn: any[] = [];
export let logged: any[] = [];

export const isOnline = (user: any) => {
  return loggedIn.includes(user);
};

export const addOnline = (user: any) => {
  return loggedIn.push(user);
};

export const onlineList = () => {
  return loggedIn.map((x) => x.name);
};

export const checkToken = (token: any) => {
  return logged.filter((x) => x.token === token)[0];
};

export const removeByToken = (token: any) => {
  return (loggedIn = loggedIn.filter((x) => x.token !== token));
};

export const addToUsers = (user: any) => {
  return logged.push(user);
};
