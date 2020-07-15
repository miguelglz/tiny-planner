/**
 * Appends an unique ID by taking it from the URI property and returns a
 * formatted objecto to be used in the checkbox group
 * 
 * @param {Array} resultList - List of recipies from the API get request.
 *
 * @returns {Array} Formatted array of objects.
 */
export function formatResults(resultList: Array<object>): Array<object> {
  return resultList.map((recipe: any) => {
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
}

/**
 * Filters the result list based on an array of selected IDs
 * 
 * @param {Array} recipesList - List of recipies from the API get request.
 * @param {Array} selectedRecipeIds - List IDs of the selected meals.
 *
 * @returns {Array} Filtered recipies list.
 */
export function filterSelectedRecipies(
  recipesList: Array<object>,
  selectedRecipeIds: Array<string>
): Array<object> {
  return recipesList.filter((recipe: any) =>
    selectedRecipeIds.includes(recipe.id)
  );
}
