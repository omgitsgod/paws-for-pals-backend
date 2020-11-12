import { getDogs, getCats } from "./providers/PetFinderDataProvider";

export const getDogsByLocation = async (zip: string) => {
    if (zip.length < 5) {
        return {
            animals: []
        }
    }

    return getDogs({location : zip})
};
export const getCatsByLocation = async (zip: string) => {
  if (zip.length < 5) {
    return {
      animals: [],
    };
  }

  return getCats({ location: zip });
};