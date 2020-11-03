import fetch from "node-fetch";
import { Client } from '@petfinder/petfinder-js';
import dotenv from 'dotenv';

dotenv.config();

const apiKey:string = process.env.PETFINDER_KEY!;
const secret:string = process.env.PETFINDER_SECRET!;

const client = new Client({ apiKey, secret });
type qeuries = {
    location: string;
}

export const getDogs = async (q: qeuries) => {
  const location = q.location || '';
  const response = await client.animal.search({
    type: 'Dog',
    location: location,
    distance: '10',
    limit: '10',
  });
  return response.data;
};

export const getCats = async (q: qeuries) => {
  const location = q.location || '';
  const response = await client.animal.search({
    type: 'Cat',
    location: location,
    distance: '10',
  });
  return response.data;
};
