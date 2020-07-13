# Surely Meal Planner

## Instructions

Build a React app (using Typescript) using this template project that accomplishes the following:

1. Let's you search for `Recipe`s by [diet](#diets), [health type](#health_type), and any arbitrary `query` text that appears in the `Recipe` (i.e. `query=chicken`) using the [Edamam Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api) with the free key that you can obtain from here: [Edamam API Key](https://developer.edamam.com/edamam-recipe-api)
1. Let's you select `Recipe`s returned and add it to your `Meal Plan`. (Just an array of recipe Ids is fine.)
1. Let's you view a final summary of your `Meal Plan` for the week, in a list of recipe cards (simple design is fine) with recipe detail information on it so you can view a clear list of the recipes for the week. A way to delete individual recipe cards, and persist meal plans would be awesome too.
1. Thouroughly tested and validated through React Testing Suite. Feel free to improve or replace the existing tests as well.

While we'll be judging this on functionality above all else, feel free to showcase your skills and diligence -- from documentation, design, architecture, and more.

Note that the Edamam API is limited and you cannot search by diet or cuisine type with the free API key.

### CSS

Note that the current site uses [skeleton.css](http://getskeleton.com) for some base styling to use, but we also use Sass modules that you can do custom styling with. Feel free to replace this if you like with anything you're more comfortable with.

## APIs

Use the api key and app id from Edamamn to populate recipes. If for whatever reason this isn't working, contact us and we'll see about getting you a key and app id.

Note that the test keys given to you are limited and do not allow you to filter across dish and cuisine type. Feel free to handle those items as you like (either show errors from the API properly, ignore those filters, etc).

### Example `curl`

This example curl will use the API to search for alcohol free recipes that are low carb, limiting to ten results, which contain the word "chicken" in them.

```shell
curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&health=alcohol-free&diet=low-carb"
```

## Domain Model

Feel free to use this domain model as a starting point for the application.

### `Recipe`

```javascript
{
    label: "recipe title",
    image: "image url",
    source: "source site identifier",
    url: "original recipe url",
    yield: 100, //integer, number of servings
    calories: 835.25, //float, total energy, kcal
    totalWeight: 25.2 //float, total weight, g
    ingredients: Ingredient[] //Ingredient[], array of Ingredient types
    totalNutrients: NutrientInfo[],//NutrientInfo[], nutrients for entire recipe
    totalDaily: NutrientInfo[], //NutrientInfo[], % daily value for entire recipe
    dietLabels: enum[], //diet labels
    healthLabels: enum[], //health labels
}
```

### `Ingredient`

```javascript
{
    foodId: "food identifier string",
    quantity: 2.5, //float, quantity of specified measure
    measure: Measure, //Measure
    weight: 2.5, //float, total weight, g
    food: Food //Food
}
```

### `NutrientInfo`

```javascript
{
    uri: "string identifier",
    label: "display label",
    quantity: 2.5, //float quantity of specified units
    unit: "unit"
}
```

### `Measure`

```javascript
{
    uri: "string identifier",
    label: "common name",
}
```

### `Food`

```javascript
{
    foodId: "string food identifier",
    label: "common name",
}
```

### <a name="diets"></a> Diet Labels

```javascript
['balanced', 'high-protein', 'low-fat', 'low-carb', 'low-sodium'];
```

### <a name="health"></a> Health Labels

```javascript
['vegan', 'vegetarian', 'peanut-free', 'tree-nut-free', 'alcohol-free', 'sugar-concious'];
```

### <a name="meal_type"></a> Meal Type (Not avail on Free API)

```javascript
['Breakfast', 'Lunch', 'Dinner', 'Snack'];
```

### <a name="dish_type"></a> Dish Type (Not avail on Free API)

```javascript
[
    'Bread',
    'Cereals',
    'Condiments and sauces',
    'Drinks',
    'Desserts',
    'Main course',
    'Pancake',
    'Preps',
    'Preserve',
    'Salad',
    'Sandwiches',
    'Side dish',
    'Soup',
    'Starter',
    'Sweets',
];
```

### <a name="Cuisine Type"></a> Cuisine Type (Not avail on Free API)

```javascript
[
    'American',
    'Asian',
    'British',
    'Caribbean',
    'Central Europe',
    'Chinese',
    'Eastern Europe',
    'French',
    'Indian',
    'Italian',
    'Japanese',
    'Kosher',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'South American',
    'South East Asian',
];
```

### <a name="dish_type"></a> Dish Type

### Nutrients Codes and units

<table>
	<tbody><tr>
		<th><span>NTR</span> Code </th>
		<th>Name </th>
		<th>Unit </th>
		<th><span>NTR</span> Code </th>
		<th>Name </th>
		<th>Unit </th>
	</tr>
	<tr>
		<td> CA </td>
		<td> Calcium </td>
		<td> mg </td>
		<td> ENERC_KCAL </td>
		<td> Energy </td>
		<td> kcal </td>
	</tr>
	<tr>
		<td> <span>CHOCDF</span> </td>
		<td> Carbs </td>
		<td> g </td>
		<td> <span>NIA</span> </td>
		<td> Niacin (B3) </td>
		<td> mg </td>
	</tr>
	<tr>
		<td> <span>CHOLE</span> </td>
		<td> Cholesterol </td>
		<td> mg </td>
		<td> P </td>
		<td> Phosphorus </td>
		<td> mg </td>
	</tr>
	<tr>
		<td> <span>FAMS</span> </td>
		<td> Monounsaturated </td>
		<td> g </td>
		<td> <span>PROCNT</span> </td>
		<td> Protein </td>
		<td> g </td>
	</tr>
	<tr>
		<td> <span>FAPU</span> </td>
		<td> Polyunsaturated </td>
		<td> g </td>
		<td> <span>RIBF</span> </td>
		<td> Riboflavin (B2) </td>
		<td> mg </td>
	</tr>
	<tr>
		<td> <span>SUGAR</span> </td>
		<td> Sugars </td>
		<td> g </td>
		<td> <span>SUGAR</span>.added </td>
		<td> Sugars, added </td>
		<td> g </td>
	</tr>
	<tr>
		<td> <span>FAT</span> </td>
		<td> Fat </td>
		<td> g </td>
		<td> <span>FASAT</span> </td>
		<td> Saturated </td>
		<td> g </td>
	</tr>
	<tr>
		<td> <span>FATRN</span> </td>
		<td> Trans </td>
		<td> g </td>
		<td> <span>TOCPHA</span> </td>
		<td> Vitamin E </td>
		<td> mg </td>
	</tr>
	<tr>
		<td> FE </td>
		<td> Iron </td>
		<td> mg </td>
		<td> VITA_RAE </td>
		<td> Vitamin A </td>
		<td> æg </td>
	</tr>
	<tr>
		<td> <span>FIBTG</span> </td>
		<td> Fiber </td>
		<td> g </td>
		<td> VITB12 </td>
		<td> Vitamin B12 </td>
		<td> æg </td>
	</tr>
	<tr>
		<td> <span>FOLDFE</span> </td>
		<td> Folate (Equivalent) </td>
		<td> æg </td>
		<td> <span>FOLFD</span> </td>
		<td> Folate (food) </td>
		<td> æg </td>
	</tr>
	<tr>
		<td> K </td>
		<td> Potassium </td>
		<td> mg </td>
		<td> <span>VITC</span> </td>
		<td> Vitamin C </td>
		<td> mg </td>
	</tr>
	<tr>
		<td> MG </td>
		<td> Magnesium </td>
		<td> mg </td>
		<td> <span>VITD</span> </td>
		<td> Vitamin D </td>
		<td> æg </td>
	</tr>
	<tr>
		<td> NA </td>
		<td> Sodium </td>
		<td> mg </td>
		<td> VITK1 </td>
		<td> Vitamin K </td>
		<td> æg </td>
	</tr>
	<tr>
		<td> VITB6A </td>
		<td> Vitamin B6 </td>
		<td> mg </td>
		<td> <span>THIA</span> </td>
		<td> Thiamin (B1) </td>
		<td> mg </td>
	</tr>
</tbody></table>
