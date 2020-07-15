import React, { FC, useState } from 'react';
import { message } from 'antd';
import RecipeSearchForm from './RecipeSearchForm';
import { SearchRecipesQueryParams } from '../../helpers/api/interfaces';
import api from '../../helpers/api/wrapper';

const RecipeSearchFormDataLayer: FC = () => {
  const [recipes, setRecipes] = useState<any>(null);
  const [recipesData, setRecipesData] = useState<any>([]);
  const [selectedRecipes, setSelectedRecipes] = useState<Array<object>>([]);

  async function handleOnSearch(
    queryParams: SearchRecipesQueryParams
  ): Promise<void> {
    try {
      const results: any = await api.searchRecipes(queryParams);
      const recipeList = results.map((recipe: any) => {
        const recipeId: string = recipe.uri.replace(
          'http://www.edamam.com/ontologies/edamam.owl#recipe_',
          ''
        );
        recipe.id = recipeId;
        return {
          label: recipe.label,
          value: recipeId,
        };
      });
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
    setSelectedRecipes(
      recipes.filter((recipe: any) => selectedRecipeIds.includes(recipe.id))
    );
    console.log('selectedRecipeIds', selectedRecipeIds)
  }

  return (
    <RecipeSearchForm
      onSearch={handleOnSearch}
      recipes={recipes}
      checkBoxChange={hanldeCheckboxChange}
    />
  );
};

export default RecipeSearchFormDataLayer;
