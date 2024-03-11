// Import this named export into your test file:
export const mockAddItem = jest.fn();
export const mockRemoveItem = jest.fn();
export const mockRemoveAllItem = jest.fn();

const CartStore = jest.fn().mockImplementation(() => ({
  addItem: mockAddItem,
  removeItem: mockRemoveItem,
  removeAllItem: mockRemoveAllItem,
}));

export default CartStore;
