import fetch from 'node-fetch';
import { apiKey, secret } from '../../config';

let token: string
let expires = new Date().getTime() + 3600 * 1000

type petQeury = {
  location: string | undefined;
  distance: string | undefined;
  age: string | undefined;
  breed: string | undefined;
};
const checkExpiration = () => {
  let now = new Date().getTime();
  
  return expires - now < 1;
}

const getOAuth = async () => {
  const result = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    body:
      'grant_type=client_credentials&client_id=' +
      apiKey +
      '&client_secret=' +
      secret,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((r) => r.json());

  if (result.access_token) {
    token = result.access_token;
    expires = new Date().getTime() + result.expires_in * 1000;
    console.log('new token is: ', token);
    return token;
  }
};

export const getPets = async (type: string, q: petQeury) => {
  const { location, distance, age, breed } = q;
  const url = 'https://api.petfinder.com/v2/animals';
  let queryUrl = `${url}?type=${type}${age ? `&age=${age}` : ''}${location && distance ? `&location=${location}&distance=${distance}` : ''}${breed ? `&breed=${breed}` : ''}`;
  await getOAuth();
  const pets = await fetch(queryUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(r => r.json());

  return pets;
};
