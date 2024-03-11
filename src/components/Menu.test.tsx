import { screen, render } from '@testing-library/react';

import Menu from './Menu';

import fixtures from '../../fixtures';

import Food from '../types/FoodType';

describe('ComponentTest: Menu', () => {
  const { foods } = fixtures;

  it('rendering correctly', () => {
    render(<Menu menu={foods} />);

    foods.forEach((food: Food) => {
      screen.getByText(food.name);
    });

    const buttons = screen.getAllByRole('button', { name: '선택' });
    expect(buttons.length).toBe(foods.length);
  });
});
