import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

//Smoke test:
it('renders without crashing', () => {
  render(<App />, { wrapper: MemoryRouter });
});

it('matches snapshot', () => {
  const { asFragment } = render(<App />, { wrapper: MemoryRouter });
  expect(asFragment()).toMatchSnapshot();
});
