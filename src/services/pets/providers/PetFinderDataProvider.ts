import fetch from "node-fetch";

type qeuries = {
    location: string;
}

export const getDogs = async (q: qeuries) => {

    const location = q.location || ""
    const key = process.env.PETFINDER_KEY;
    const baseURL = "https://api.petfinder.com/v2";
    const url = `${baseURL}/animals?type=dogs&key=${key}&location=${location}`
    const response = await fetch(url);
    return await response.json();
};

export const getCats = async (q: qeuries) => {
  const location = q.location || "";
  const key = process.env.PETFINDER_KEY;
  const baseURL = "https://api.petfinder.com/v2";
  const url = `${baseURL}/animals?type=cats&key=${key}&location=${location}`;
  const response = await fetch(url);
  return await response.json();
};