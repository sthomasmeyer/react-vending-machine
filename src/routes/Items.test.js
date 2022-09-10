import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Items from './Items';
import { MemoryRouter } from 'react-router-dom';

// Smoke test:
it('renders without crashing', () => {
  render(<Items category={'Snacks'} />, { wrapper: MemoryRouter });
});

it('matches snapshot', () => {
  const { asFragment } = render(<Items category={'Snacks'} />, {
    wrapper: MemoryRouter
  });
  expect(asFragment()).toMatchSnapshot();
});

it('generates expected HTML elements w/ given parameters', () => {
  render(<Items category={'Snacks'} />, { wrapper: MemoryRouter });

  expect(screen.getByText('Lori Harvey')).toBeInTheDocument();
  expect(screen.getByText('Snickers')).toBeInTheDocument();
  expect(screen.getByText(`Reese's Cups`)).toBeInTheDocument();
});

it('has a functional search mechanism', () => {
  render(<Items category={'Snacks'} />, { wrapper: MemoryRouter });

  expect(screen.getByText('Snickers')).toBeInTheDocument();
  expect(screen.getByText(`Reese's Cups`)).toBeInTheDocument();

  const searchInput = screen.getByDisplayValue('');
  fireEvent.change(searchInput, { target: { value: 'L' } });

  expect(screen.queryByText('Snickers')).not.toBeInTheDocument();
  expect(screen.queryByText('Snickers')).not.toBeInTheDocument();
  expect(screen.getByText('Lori Harvey')).toBeInTheDocument();
});

// it('displays info about a selected item', () => {
//   render(<Items category={'Snacks'} />, { wrapper: MemoryRouter });

//   expect(screen.queryByText(`Price: $2.22`)).not.toBeInTheDocument();

//   let targetElement = screen.getByText(`Reese's Cups`);
//   fireEvent.click(targetElement);

//   expect(screen.getByText(`Price: $2.22`)).toBeInTheDocument();
// });
