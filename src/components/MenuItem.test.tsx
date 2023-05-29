import { fireEvent, render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import MenuItem from './MenuItem';

const handleClickSelect = jest.fn();

const context = describe;

describe('<MenuItem />', () => {
  const { foods } = fixtures;
  const food = foods[0];
  it('render menu button', () => {
    render(<MenuItem
      food={food}
      handleClickSelect={handleClickSelect}
    />);

    screen.getByRole('button', { name: /Menu-01/ });
    screen.getByRole('button', { name: /8,000원/ });
  });

  context('click menu button', () => {
    it('execute handleClickSelect', () => {
      render(<MenuItem
        food={food}
        handleClickSelect={handleClickSelect}
      />);

      const button = screen.getByRole('button', { name: /Menu-01/ });

      fireEvent.click(button);

      expect(handleClickSelect).toHaveBeenCalled();
    });
  });
});
