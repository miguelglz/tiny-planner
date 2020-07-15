import React, { FC, useState } from 'react';
import { message } from 'antd';
import RecipeSearchForm from './RecipeSearchForm';
import { SearchRecipesQueryParams } from '../../helpers/api/interfaces';
import {
  formatResults,
  filterSelectedRecipies,
} from './RecipeSearchForm.utils';
import api from '../../helpers/api/wrapper';

const RecipeSearchFormDataLayer: FC = () => {
  const [recipes, setRecipes] = useState<any>(null);
  const [recipesData, setRecipesData] = useState<any>([]);
  const [selectedRecipes, setSelectedRecipes] = useState<Array<object>>([]);

  async function handleOnSearch(
    queryParams: SearchRecipesQueryParams
  ): Promise<void> {
    try {
      setSelectedRecipes([]);
      setRecipes(null);
      const results: any = await api.searchRecipes(queryParams);
      const recipeList = formatResults(results);
      setRecipesData(results);
      setRecipes(recipeList);
    } catch (e) {
      const errorMessage =
        e.response && e.response.data ? e.response.data : e.message;
      console.error('Error while fetching recipes.', errorMessage);
      message.error(errorMessage);
    }
  }

  function hanldeCheckboxChange(selectedRecipeIds: Array<string>): void {
    const filteredRecipes = filterSelectedRecipies(
      recipesData,
      selectedRecipeIds
    );
    setSelectedRecipes(filteredRecipes);
  }

  return (
    <RecipeSearchForm
      onSearch={handleOnSearch}
      recipes={recipes}
      checkBoxChange={hanldeCheckboxChange}
      selectedRecipes={selectedRecipes}
    />
  );
};

export default RecipeSearchFormDataLayer;
