import storage from './storage';

export const getFavorites = () => {
  return JSON.parse(storage.get('favorites'));
};

export const addFavorites = symbol => {
  const favorites = getFavorites() || {};
  favorites[symbol] = true;
  storage.set('favorites', favorites);
};

export const removeFavorites = symbol => {
  const favorites = getFavorites() || {};
  delete favorites[symbol];
  storage.set('favorites', favorites);
};
