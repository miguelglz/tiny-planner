# Surely Meal Planner 🍲🥗📅

### A React App that fetches meals information from the [Edamam Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api) to allow the user select their prefered meals based on specific criteria.

## TODO
- Add a button to load more results to the meal checkbox group
- Use the pagination to fetch in batches of 10 items
- In the checkbox list add a preview of the meal by showing a tumbnail
- Debounce next 10 items when the end of the list is reached
- Make a test API call to see if the credentials allows to search by dish and / or cuisine type
- Block dish / cuisine type if the credentials doesn't let query by those params
- Allow to select multiple items from dish / cuisine type
- Modify the API request to n several dish / cuisine values
- Add unit tests for StyledSelect
- Add unit tests for the RecipeSearchForm utils funtions
- Create a theme config file to easily configure font, spacing and color, and implement it in ant design
- Create different screens instead of a single one by using [React Navigation](https://reactnavigation.org/)
- Add loading spinners / label and placeholders
