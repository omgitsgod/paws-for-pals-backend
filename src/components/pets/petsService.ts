import { Client } from '@petfinder/petfinder-js';
import { apiKey, secret} from '../../config';

let client = new Client({ apiKey, secret });

type petQeury = {
  location: string | undefined;
  distance: string | undefined;
  age: string | undefined;
};

export const getPets = async (type: string, q: petQeury) => {
  const { location, distance, age } = q;
  let response;
  try {
    response = await client.animal.search({
      type: type,
      age,
      location,
      distance,
      limit: '100',
    });
  } catch {
    client = new Client({ apiKey, secret });
  } finally {
    response = await client.animal.search({
      type: type,
      age,
      location,
      distance,
      limit: '100',
    });
  }
  return response.data;
};
