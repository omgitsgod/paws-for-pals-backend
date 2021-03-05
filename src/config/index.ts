import dotenv from 'dotenv';

dotenv.config();

export const apiKey: string =  process.env.PETFINDER_KEY!;
export const secret: string =  process.env.PETFINDER_SECRET!;
export const port: string = process.env.PORT || '5000';
export const clientID: string = process.env.CLIENTID!;
export const clientSecret: string = process.env.CLIENTSECRET!;
export const host: string = process.env.HOST!;
export const clientLink: string = process.env.CLIENTLINK!;
export const redisUrl: any = process.env.REDIS_URL!;
export const mongoDB: string = process.env.MONGODB_URI || 'mongodb://localhost/pawsforpals';
export const production: boolean = process.env.production === 'true' ? true : false;