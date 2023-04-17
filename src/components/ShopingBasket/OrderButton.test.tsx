import { screen, render, fireEvent } from '@testing-library/react';
import OrderButton from './OrderButton';

describe('OrderButton', () => {
  const menu = [{ id: 'FOOD', name: '짜장면', price: 8_000 }];

  const onClick = jest.fn();

  const renderComponent = () => render(<OrderButton foods={menu} onClick={onClick} />);
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('OrderButton Component render', () => {
    renderComponent();
    screen.getByText('합계: 8,000원 주문');
  });

  it('OrderButton Click', () => {
    renderComponent();
    const util = screen.getByText('합계: 8,000원 주문');
    fireEvent.click(util);
    expect(onClick).toBeCalled();
  });
});
