import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import DefaultItem from './DefaultItem';

//Smoke test:
it('renders without crashing', () => {
  render(<DefaultItem />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<DefaultItem />);
  expect(asFragment()).toMatchSnapshot();
});

it('generates expected message w/ given parameters', () => {
  render(<DefaultItem param={'snack'} />);
  expect(
    screen.getByText(`Select the snack that you're interested in.`)
  ).toBeInTheDocument();
});
