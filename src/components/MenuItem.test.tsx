import { fireEvent, render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';

import useStore from '../hooks/useStore';

import Food from '../types/Food';

const context = describe;

jest.mock('../hooks/useStore');

interface Store {
    addMenu: (food:Food) => void;
}

describe('MenuItem', () => {
  const addMenu = jest.fn();
  (useStore as jest.Mock).mockImplementation((): Store => ({
    addMenu,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  };

  context('render MenuItem', () => {
    it('render', () => {
      render(<MenuItem food={food} />);
      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
      expect(screen.getByText(/8,000/)).toBeInTheDocument();
    });
  });

  context('click button', () => {
    it('Food price delivery', () => {
      render(<MenuItem food={food} />);
      fireEvent.click(screen.getByRole('button'));
      expect(addMenu).toHaveBeenCalledWith(food);
    });
  });
});
