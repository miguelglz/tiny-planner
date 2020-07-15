import React from 'react';
import { render } from '@testing-library/react';
import RecipeSearchForm from './RecipeSearchForm.dataLayer';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe('RecipeSearchForm Component', () => {
  it('should render query search element', () => {
    const { getByPlaceholderText } = render(<RecipeSearchForm />);
    const input = getByPlaceholderText('Input a meal name, for example: eggs.');
    expect(input).toBeInTheDocument();
  });
  it('should render diet select', () => {
    const { getByText } = render(<RecipeSearchForm />);
    const select = getByText(/select a diet/i);
    expect(select).toBeInTheDocument();
  });

  it('should render cuisine select', () => {
    const { getByText } = render(<RecipeSearchForm />);
    const select = getByText(/select a dish type/i);
    expect(select).toBeInTheDocument();
  });

  it('should render dish type select', () => {
    const { getByText } = render(<RecipeSearchForm />);
    const select = getByText(/select a cuisine type/i);
    expect(select).toBeInTheDocument();
  });
});
