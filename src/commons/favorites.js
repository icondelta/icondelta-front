import storage from './storage';

export const getFavorites = () => {
  return storage.get('favorites') || {};
};

export const setFavorites = (symbol) => {
  const favorites = getFavorites() || {};
  favorites[symbol] = true;
  storage.set('favorites', favorites);
};

export const removeFavorites = (symbol) => {
  const favorites = getFavorites() || {};
  delete favorites[symbol];
  storage.set('favorites', favorites);
};

export const toggleFavorite = (token, addFavorites) => (e) => {
  e.preventDefault();
  e.stopPropagation();

  token.favorited ? removeFavorites(token.symbol) : setFavorites(token.symbol);

  token.favorited = !token.favorited;
  addFavorites(token);
};
