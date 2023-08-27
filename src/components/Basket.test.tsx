import { render, screen } from '@testing-library/react';

import Basket from './Basket';
import fixtures from '../../fixtures';

describe('Basket', () => {
  const addReceipt = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    jest.mock('../hooks/useBasketStore', () => () => ({
      basket: fixtures.foods,
      totalPrice: 16000,
      clearBasket: jest.fn(),
      removeMenu: jest.fn(),
    }));
  });

  it('Basket을 렌더링 한다.', () => {
    render(<Basket addReceipt={addReceipt} />);

    screen.getByText(/점심 바구니/);
  });
});
