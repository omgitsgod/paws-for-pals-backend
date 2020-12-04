import { getDogs, getCats } from "./providers/PetFinderDataProvider";

export const getDogsByLocation = async (location: string, distance: string) => {
    if (location.length < 5) {
        return {
            animals: []
        }
    }

    return getDogs({ location, distance })
};
export const getCatsByLocation = async (location: string, distance: string) => {
  if (location.length < 5) {
    return {
      animals: [],
    };
  }

  return getCats({ location, distance });
};