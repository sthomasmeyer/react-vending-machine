import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import VendingMachine from './VendingMachine';
import { MemoryRouter } from 'react-router-dom';

//Smoke test:
it('renders without crashing', () => {
  render(<VendingMachine />, { wrapper: MemoryRouter });
});

it('matches snapshot', () => {
  const { asFragment } = render(<VendingMachine />, { wrapper: MemoryRouter });
  expect(asFragment()).toMatchSnapshot();
});

it('generates expected HTML elements', () => {
  render(<VendingMachine />, { wrapper: MemoryRouter });
  const title = screen.getByText('A Beautiful Vending Machine');
  expect(title).toBeInTheDocument();
  const snacks = screen.getByText('snacks');
  expect(snacks).toBeInTheDocument();
  const drinks = screen.getByText('drinks');
  expect(drinks).toBeInTheDocument();
});
