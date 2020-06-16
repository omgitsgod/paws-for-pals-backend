import { Request, Response } from "express";
import { getDogsByLocation } from "./PetsController";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
        res.send("Pets!");
    },
  },
  {
    path: "/dogs",
    method: "get",
    handler: async ({ query }: Request, res: Response) => {
        let result;
        if (query.location) {
            result = await getDogsByLocation(query.location.toString());
        }
        res.status(200).send(result);
    },
  },
];