import mongoose from 'mongoose';
import User from '../components/users/userModel';
import { mongoDB } from '../config';

export const connectDb = () => mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

export const models = {User};
