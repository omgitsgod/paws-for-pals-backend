import { saveFavorite, getFavorites } from './favoritesController';

export default [
  {
    path: '/save_favorite',
    method: 'post',
    handler: saveFavorite,
  },
  {
    path: '/get_favorites',
    method: 'get',
    handler: getFavorites,
  },
];
