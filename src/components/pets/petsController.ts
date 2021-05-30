import { Request, Response } from 'express';
import Favorite from '../favorites/favoriteModel';
import { getPets } from './petsService';

export const getDogs = async ({ query, session }: Request, res: Response) => {
  const location = query.location?.toString();
  const distance = query.distance?.toString();
  const age = query.age?.toString();
  const breed = query.breed?.toString();
  const result = await getPets('Dog', { location, distance, age, breed })
  if (session.user) {
    const favorites = await Favorite.find({user: session.user});
    const favoriteIds = favorites.map(favorite => favorite.id);
    const filtered = result.animals.filter((pet: any) => !favoriteIds.includes(pet.id));
    return res.status(200).send({animals: filtered});
  }
  res.status(200).send(result);
};

export const getCats = async ({ query, session }: Request, res: Response) => {
  const location = query.location?.toString();
  const distance = query.distance?.toString();
  const age = query.age?.toString();
  const breed = query.breed?.toString();
  const result = await getPets('Cat', { location, distance, age, breed });
  if (session.user) {
    const favorites = await Favorite.find({user: session.user});
    const favoriteIds = favorites.map(favorite => favorite.id);
    const filtered = result.animals.filter((pet: any) => !favoriteIds.includes(pet.id));
    return res.status(200).send({animals: filtered});
  }
  res.status(200).send(result);
};