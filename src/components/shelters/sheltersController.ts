import { Request, Response } from 'express';
import { getShelterById } from './sheltersService';

export const getShelter = async ({ query }: Request, res: Response) => {
  const id = query.id?.toString();
  const result = await getShelterById({ id });
  res.status(200).send(result);
};