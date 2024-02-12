import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  afterEach(cleanup);

  test('renders the todo app', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/todo app/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('allows users to add items to the list', () => {
    const { getByLabelText, getByText } = render(<App />);
    const input = getByLabelText('Add todo:');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(getByText('Add'));
    expect(getByText('New todo')).toBeInTheDocument();
  });

  test('allows users to delete items from the list', () => {
    const { getByLabelText, getByText, queryByText } = render(<App />);
    const input = getByLabelText('Add todo:');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(getByText('Add'));
    fireEvent.click(getByText('Delete'));
    expect(queryByText('New todo')).not.toBeInTheDocument();
  });
});
