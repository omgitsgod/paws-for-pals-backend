import { Request, Response } from 'express';
import { getShelterById, getSheltersById } from './sheltersService';

export const getShelter = async ({ query }: Request, res: Response) => {
  const id = query.id?.toString();
  const result = await getShelterById({ id });
  res.status(200).send(result);
};

export const getShelters = async ({ query }: Request, res: Response) => {
  const ids = typeof query.ids === 'string' && JSON.parse(query.ids);
  const result = await getSheltersById({ ids });
  res.status(200).send(result);
};