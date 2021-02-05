import { Client } from '@petfinder/petfinder-js';
import dotenv from 'dotenv';

dotenv.config();

const apiKey: string = process.env.PETFINDER_KEY!;
const secret: string = process.env.PETFINDER_SECRET!;

let client = new Client({ apiKey, secret });
type qeuries = {
  location: string | undefined;
  distance: string | undefined;
  age: string | undefined;
};

export const getDogs = async (q: qeuries) => {
  const { location, distance, age } = q;
  let response;
  try {
    response = await client.animal.search({
      type: 'Dog',
      age,
      location,
      distance,
      limit: '100',
    });
  } catch {
    client = new Client({ apiKey, secret });
  } finally {
    response = await client.animal.search({
      type: 'Dog',
      age,
      location,
      distance,
      limit: '100',
    });
  }
  return response.data;
};

export const getCats = async (q: qeuries) => {
  const { location, distance, age } = q;
  let response;
  try {
    response = await client.animal.search({
      type: 'Dog',
      age,
      location,
      distance,
      limit: '100',
    });
  } catch {
    client = new Client({ apiKey, secret });
  } finally {
    response = await client.animal.search({
      type: 'Dog',
      age,
      location,
      distance,
      limit: '100',
    });
  }
  return response.data;
};
