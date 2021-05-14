import { Client } from '@petfinder/petfinder-js';
import fetch from 'node-fetch';
import { apiKey, secret} from '../../config';

//let client = new Client({ apiKey, secret: secret });
let token: string;
let expires = new Date().getTime() + 3600 * 1000;

type shelterQeury = {
  id: string | undefined;
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
  }
};

export const getShelterById = async (q: shelterQeury) => {
  const { id } = q;
  const url = 'https://api.petfinder.com/v2/organizations';
  let queryUrl = `${url}/${id}`;
  await getOAuth();
  const shelter = await fetch(queryUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(r => r.json());
  
  return shelter;
};
