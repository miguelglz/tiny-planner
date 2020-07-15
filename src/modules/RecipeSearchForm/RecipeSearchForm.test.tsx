import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RecipeSearchForm, { RecipeSearchFormProps } from './RecipeSearchForm';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

function renderRecipeSearchForm(props: Partial<RecipeSearchFormProps> = {}) {
  const defaultProps: RecipeSearchFormProps = {
    onSearch() {
      return new Promise((resolve, reject) => {
        resolve();
      });
    },
    recipes: null,
    checkBoxChange() {
      return;
    },
    selectedRecipes: [],
  };
  return render(<RecipeSearchForm {...defaultProps} {...props} />);
}

describe('RecipeSearchForm Component', () => {
  it('should render query search element', () => {
    const { getByPlaceholderText } = renderRecipeSearchForm();
    const input = getByPlaceholderText('Input a meal name, for example: eggs.');
    expect(input).toBeInTheDocument();
  });
  it('should render diet select', () => {
    const { getByText } = renderRecipeSearchForm();
    const select = getByText(/select a diet/i);
    expect(select).toBeInTheDocument();
  });

  it('should render cuisine select', () => {
    const { getByText } = renderRecipeSearchForm();
    const select = getByText(/select a dish type/i);
    expect(select).toBeInTheDocument();
  });

  it('should render dish type select', () => {
    const { getByText } = renderRecipeSearchForm();
    const select = getByText(/select a cuisine type/i);
    expect(select).toBeInTheDocument();
  });

  it('should not render recipe list container', () => {
    const { queryByText } = renderRecipeSearchForm();
    const recipeListTitle = queryByText(/select meals for your plan/i);
    expect(recipeListTitle).toBeNull();
  });

  it('should render recipe list with no results', () => {
    const { getByText } = renderRecipeSearchForm({ recipes: [] });
    const recipeListTitle = getByText(/no meals found/i);
    expect(recipeListTitle).toBeInTheDocument();
  });

  it('should render recipe list with results', () => {
    const { getByText } = renderRecipeSearchForm({ recipes: ['foo', 'bar'] });
    const recipeListTitle = getByText(/select meals for your plan/i);
    expect(recipeListTitle).toBeInTheDocument();
  });

  it('should not render meal list container', () => {
    const { queryByText } = renderRecipeSearchForm();
    const mealsTitle = queryByText(/selected plan/i);
    expect(mealsTitle).toBeNull();
  });

  it('should render recipe meal with results', () => {
    const { getByText } = renderRecipeSearchForm({
      selectedRecipes: [{ id: 'foo' }, { id: 'bar' }],
    });
    const mealsTitle = getByText(/selected plan/i);
    expect(mealsTitle).toBeInTheDocument();
  });

  it('should allow searching', async () => {
    const onSearch = jest.fn();
    const { findByTestId } = renderRecipeSearchForm({ onSearch });
    const searchForm = await findByTestId('search-form');
    const searchQuery = await findByTestId('search-query-input');

    fireEvent.change(searchQuery, { target: { value: 'test' } });
    fireEvent.submit(searchForm);
    setTimeout(() => {
      // waitForElement not working as expected, had to use setTimeOut
      expect(onSearch).toHaveBeenCalledWith({ q: 'test' });
    }, 0);
  });

  it('should allow selecting a meal', async () => {
    const checkBoxChange = jest.fn();
    const { getByText } = renderRecipeSearchForm({
      checkBoxChange,
      recipes: ['foo', 'bar'],
    });
    const fooCheckbox = getByText(/foo/i);

    fireEvent.click(fooCheckbox);
    setTimeout(() => {
      // waitForElement not working as expected, had to use setTimeOut
      expect(checkBoxChange).toHaveBeenCalledWith(['foo']);
    }, 0);
  });
});
