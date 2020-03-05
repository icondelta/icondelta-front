const get = key => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const set = (key, item) => localStorage.setItem(key, JSON.stringify(item));

const rm = key => localStorage.removeItem(key);

export default {
  get,
  set,
  rm,
};
