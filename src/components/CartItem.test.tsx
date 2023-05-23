import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import foods from '../../fixtures/foods';

describe('CartItem', () => {
  const food = foods[0];

  it('renders item information', () => {
    render(<CartItem
      id={food.id}
      name={food.name}
      index={0}
    />);
    screen.getByText(/짜장면/);
  });

  it('listens for cancel button click event', () => {
    render(<CartItem
      id={food.id}
      name={food.name}
      index={0}
    />);
    fireEvent.click(screen.getByText('X'));
  });
});
