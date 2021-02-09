import dotenv from 'dotenv';

dotenv.config();

export const apiKey: string =  process.env.PETFINDER_KEY!;
export const secret: string =  process.env.PETFINDER_SECRET!;
export const port: string = process.env.PORT || '5000';