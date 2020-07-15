import axios from 'axios';
import { api } from '../../config/settings';
import { SearchRecipesQueryParams } from './interfaces';

axios.interceptors.request.use(async function (config) {
  const {
    baseURL,
    credentials: { app_id, app_key },
  } = api;
  config.baseURL = baseURL;
  config.params = { ...config.params, app_id, app_key };
  return config;
});

const searchRecipes = async (
  queryParams: SearchRecipesQueryParams
): Promise<object> => {
  const {
    data: { hits: res },
  } = await axios.get('search', { params: queryParams });
  return res.map((r: any) => r.recipe);
};

export default {
  searchRecipes,
};
