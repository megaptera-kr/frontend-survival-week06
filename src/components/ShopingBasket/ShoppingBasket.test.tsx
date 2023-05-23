import { render, screen } from '@testing-library/react';
import ShoppingBasket from './ShoppingBasket';
import fixtures from '../../../fixtures';

const setFoods = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [fixtures.foods, setFoods],
}));

describe('ShoppingBasket', () => {
  const setReceipt = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => render(<ShoppingBasket setReceipt={setReceipt} />);

  it('ShoppingBasket render title', () => {
    renderComponent();
    const componentElement = screen.getByText('점심 바구니');
    expect(componentElement).toBeInTheDocument();
  });

  it('ShoppingBasket render item', () => {
    renderComponent();
    const componentElement = screen.getByText('짜장면(8,000원)');
    expect(componentElement).toBeInTheDocument();
  });
});
