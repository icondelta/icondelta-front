const get = key => localStorage.getItem(key);

const set = (key, item) => localStorage.setItem(key, JSON.stringify(item));

const rm = key => localStorage.removeItem(key);

export default {
  get,
  set,
  rm,
};
