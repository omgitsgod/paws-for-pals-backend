import fetch from "node-fetch";
import { Client } from '@petfinder/petfinder-js';
import dotenv from 'dotenv';

dotenv.config();

const apiKey:string = process.env.PETFINDER_KEY!;
const secret:string = process.env.PETFINDER_SECRET!;

const client = new Client({ apiKey, secret });
type qeuries = {
    location: string,
    distance: string,
}

export const getDogs = async (q: qeuries) => {
  const { location, distance } = q;
  const response = await client.animal.search({
    type: 'Dog',
    location,
    distance,
    limit: '100',
  });
  return response.data;
};

export const getCats = async (q: qeuries) => {
  const { location, distance } = q;
  const response = await client.animal.search({
    type: 'Cat',
    location,
    distance,
    limit: '100',
  });
  return response.data;
};
