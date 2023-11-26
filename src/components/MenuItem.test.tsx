import { fireEvent, render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';
import Button from './Button';

describe('MenuItem', () => {
  const food = {
    id: 'FOOD_ID',
    name: '짜장면',
    price: 8000,
  };
  const handleClickSelect = jest.fn();
  const onClick = jest.fn();

  function renderMenuItem() {
    render(
      <MenuItem
        food={food}
        onClick={() => handleClickSelect(food)}
      />,
    );
  }

  it('renders food information', () => {
    render(<MenuItem food={food} onClick={onClick} />);
    screen.getByText('짜장면');
  });

  it('listens for select button click event', () => {
    renderMenuItem();
    fireEvent.click(screen.getByText('짜장면'));

    expect(handleClickSelect).toBeCalledWith(food);
  });
});
