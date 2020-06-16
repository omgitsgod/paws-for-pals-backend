import { getDogs } from "./providers/PetFinderDataProvider";

export const getDogsByLocation = async (zip: string) => {
    if (zip.length < 5) {
        return {
            animals: []
        }
    }

    return getDogs({location : zip})
};