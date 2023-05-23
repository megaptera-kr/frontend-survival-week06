import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from './CartItem';

describe('CartItem', () => {
  const menu = { id: 'FOOD', name: '짜장면', price: 8_000 };
  const index = 1;

  const handleCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderComponent() {
    render(<CartItem index={index} menu={menu} handleClick={handleCancel} />);
  }

  it('CartItem render', () => {
    renderComponent();
    const elementComponent = screen.getByText('짜장면(8,000원)');
    expect(elementComponent).toBeInTheDocument();
  });

  it('click event', () => {
    renderComponent();
    fireEvent.click(screen.getByText('취소'));
    expect(handleCancel).toBeCalledWith(index);
  });
});
