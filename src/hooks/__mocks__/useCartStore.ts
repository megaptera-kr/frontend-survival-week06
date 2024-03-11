import fixtures from '../../../fixtures';

export const mockItems = { items: fixtures.cartItems, totalPrice: 19500 };

const cartStore = {
  addItem: jest.fn(),
  removeItem: jest.fn(),
  removeAllItems: jest.fn(),
};

const useCartStore = jest.fn(() => [mockItems, cartStore]);

export default useCartStore;
