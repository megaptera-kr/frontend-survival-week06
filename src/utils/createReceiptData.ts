import { MenuList } from '../../types';

const createReceiptData = (cart: MenuList) => {
  const receiptData = cart.reduce<{menu: MenuList; totalPrice: number;}>(
    (prev, curr) => {
      prev.menu.push(curr);
      prev.totalPrice += curr.price;
      return prev;
    },
    {
      menu: [],
      totalPrice: 0,
    },
  );

  return receiptData;
};

export default createReceiptData;
