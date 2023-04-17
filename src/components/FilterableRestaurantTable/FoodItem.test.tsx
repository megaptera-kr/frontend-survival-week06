import { screen, render } from '@testing-library/react';
import FoodItem from './FoodItem';

describe('FoodItem', () => {
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  };
  it('FoodItem Row render ', () => {
    render(<FoodItem food={food} />);
    expect(screen.getByText('짜장면(8,000원)')).toBeInTheDocument();
  });

  it('FoodItem Children render ', () => {
    render(
      <FoodItem food={food}>
        <p>만두</p>
      </FoodItem>,
    );
    expect(screen.getByText('만두')).toBeInTheDocument();
  });
});
