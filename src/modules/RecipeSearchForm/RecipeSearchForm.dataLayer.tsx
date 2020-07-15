import React, { FC, useState } from 'react';
import { message } from 'antd';
import RecipeSearchForm from './RecipeSearchForm';
import { SearchRecipesQueryParams } from '../../helpers/api/interfaces';
import api from '../../helpers/api/wrapper';

const RecipeSearchFormDataLayer: FC = () => {
  const [recipes, setRecipes] = useState<any>(null);

  async function handleOnSearch(
    queryParams: SearchRecipesQueryParams
  ): Promise<void> {
    try {
      const results: any = await api.searchRecipes(queryParams);
      console.log('results', results)
    } catch (e) {
      const errorMessage =
        e.response && e.response.data ? e.response.data : e.message;
      console.error('Error while fetching recipes.', errorMessage);
      message.error(errorMessage);
    }
  }

  return (
    <RecipeSearchForm
      onSearch={handleOnSearch}
    />
  );
};

export default RecipeSearchFormDataLayer;
