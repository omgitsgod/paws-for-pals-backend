import fetch from 'node-fetch';
import Shelter from './shelterModel';
import { apiKey, secret } from '../../config';

let token: string;
let expires = new Date().getTime() + 3600 * 1000;

type shelterQeury = {
  id: string | undefined;
};
type sheltersQeury = {
  ids: [];
};
const checkExpiration = () => {
  let now = new Date().getTime();
  
  return expires - now < 1;
};

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
  
  return shelter.organization;
};

export const getSheltersById = async (q: sheltersQeury) => {
  const { ids } = q;
  let shelters = [];
  await getOAuth();
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const dbQuery = await Shelter.findOne({ id });
    if (!dbQuery) {
      const url = `https://api.petfinder.com/v2/organizations/${id}`;
      const shelter = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((r) => r.json());
      const savedShelter = new Shelter(shelter.organization);
      savedShelter.save((err) => {
        if (err) {
          console.log(err);
        }
        console.log(`${shelter.organization.id} saved to db`);
      });
      shelters.push(shelter.organization);
    } else {
      console.log(`Retrieve ${dbQuery.id} from db`);
      shelters.push(dbQuery);
    }
  }
  return shelters;
};
