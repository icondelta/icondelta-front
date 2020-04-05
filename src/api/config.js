import axios from 'axios';
import { SERVER_API_URL, ICON_API_URL } from '../commons/consts';

export const iconApi = axios.create({ baseURL: `${ICON_API_URL}/api` });

export const serverApi = axios.create({ baseURL: SERVER_API_URL });
