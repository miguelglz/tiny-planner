import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    it('should render surely meal planner header', () => {
        const { getByText } = render(<App />);
        const headerElement = getByText(/surely meal planner/i);
        expect(headerElement).toBeInTheDocument();
    });
});
