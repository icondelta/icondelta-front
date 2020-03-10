import axios from 'axios';
import { SERVER_BASE_URL, ICON_NETWORK_URL } from '../common/consts';

export const iconApiInstance = () => {
  return axios.create({ baseURL: `${ICON_NETWORK_URL}/api` });
};

export const serverApiInstance = () => {
  return axios.create({ baseURL: SERVER_BASE_URL });
};
