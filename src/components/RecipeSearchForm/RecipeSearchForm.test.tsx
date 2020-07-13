import React from 'react';
import { render } from '@testing-library/react';
import RecipeSearchForm from './RecipeSearchForm';

describe('RecipeSearchForm Component', () => {
    it('should render query search element', () => {
        const { getByPlaceholderText } = render(<RecipeSearchForm />);
        const input = getByPlaceholderText('Search');
        expect(input).toBeInTheDocument();
    });
    it('should render diet multi select', () => {
        const { getByLabelText } = render(<RecipeSearchForm />);
        const select = getByLabelText('Diet');
        expect(select).toBeInTheDocument();
        expect(select).toHaveAttribute('multiple');
    });

    it('should render health multi select', () => {
        const { getByLabelText } = render(<RecipeSearchForm />);
        const select = getByLabelText('Health Type');
        expect(select).toBeInTheDocument();
        expect(select).toHaveAttribute('multiple');
    });
});
