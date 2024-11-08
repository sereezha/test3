import { api } from './config/config';
import { endpoints } from './config/endpoints';

const agent = {
  getAccounts: () => api.get(endpoints.getAccounts),
};

export default agent;
