import { v4 as uuid } from 'uuid';

let snacks = [
  {
    name: `Reese's Cups`,
    id: uuid(),
    price: `$2.22`
  },
  {
    name: `Snickers`,
    id: uuid(),
    price: `$4.44`
  },
  {
    name: 'Lori Harvey',
    id: uuid(),
    price: `$69`
  }
];

let drinks = [
  {
    name: `Coca-Cola`,
    id: uuid(),
    price: `$3.03`
  },
  {
    name: `Dr. Pepper`,
    id: uuid(),
    price: `$4.44`
  },
  {
    name: `Miller Latte`,
    id: uuid(),
    price: `$11.11`
  }
];

export function getSnacks() {
  return snacks;
}

export function getSnack(id) {
  return snacks.find((snack) => snack.id === id);
}

export function getDrinks() {
  return drinks;
}

export function getDrink(id) {
  return drinks.find((drink) => drink.id === id);
}
