import { getDogs, getCats } from './providers/PetFinderDataProvider';

export const getDogsWithOptions = async (
  location: string | undefined,
  distance: string | undefined,
  age: string | undefined
) => {
  return getDogs({ location, distance, age });
};
export const getCatsWithOptions = async (
  location: string | undefined,
  distance: string | undefined,
  age: string | undefined
) => {
  return getCats({ location, distance, age });
};
