import { Request, Response } from 'express';
import User from '../users/userModel';
import Favorite from './favoriteModel';

export const saveFavorite = async (req: Request, res: Response) => {
  const favorite = req.body;
  if (req.session.passport){
    const user = await User.findById(req.session.passport.user,(err: Error, user: any) => {if(err) {console.log(err)}; console.log('save!')});
    favorite.user = user!._id;
    favorite.favorite_id =  `${favorite.id}-${user!._id}`;
    favorite.created = Date.now();
    const savedFavorite = new Favorite(favorite);
    savedFavorite.save(err => {if (err){console.log(err)} console.log('Favorite Saved!')})
    res.json(savedFavorite);
  }
};

export const getFavorites = async(req: Request, res: Response) => {
  if (req.session.passport) {
    const favorites = await Favorite.find({user: req.session.passport.user});
    res.json(favorites);
  } else {
  res.json([]);
  }
}
