import { Request, Response } from 'express';
import { getPets } from './providers/PetFinderDataProvider';

export const getDogs = async ({ query }: Request, res: Response) => {
  const location = query.location?.toString();
  const distance = query.distance?.toString();
  const age = query.age?.toString();
  const result = await getPets('Dog', { location, distance, age })
  res.status(200).send(result);
};

export const getCats = async ({ query }: Request, res: Response) => {
  const location = query.location?.toString();
  const distance = query.distance?.toString();
  const age = query.age?.toString();
  const result = await getPets('Cat', { location, distance, age });
  res.status(200).send(result);
};