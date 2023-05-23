import {
  fireEvent, render, renderHook, screen,
} from '@testing-library/react';
import RestaurantsTableBodyFood from './RestaurantsTableBodyFood';
import food from '../fixtures/food';
import useCartStore from '../hooks/useCartStore';

const context = describe;

describe('RestaurantsTableBodyFood ', () => {
  const { result } = renderHook(() => useCartStore());
  function renderRestaurantsTableBodyFood() {
    render(<RestaurantsTableBodyFood menu={food} />);
  }

  beforeEach(() => {
    result.current[1].items = [];
  });

  context('when render component', () => {
    it('show food content', () => {
      renderRestaurantsTableBodyFood();

      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
      expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
      expect(screen.getByText(/탕수육/)).toBeInTheDocument();
    });
  });

  context('when click button', () => {
    it('add cart one food', () => {
      renderRestaurantsTableBodyFood();

      fireEvent.click(screen.getAllByRole('button', { name: '선택' })[1]);

      expect(result.current[1].snapshot.items).toHaveLength(1);
      expect(result.current[1].snapshot.totalPrice).toBe(8_000);
    });

    it('add cart two foods', () => {
      renderRestaurantsTableBodyFood();

      [0, 1].forEach((num) => fireEvent.click(screen.getAllByRole('button', { name: '선택' })[num]));

      expect(result.current[1].snapshot.items).toHaveLength(2);
      expect(result.current[1].snapshot.totalPrice).toBe(16_000);
    });
  });
});
