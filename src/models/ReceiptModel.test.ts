import ReceiptModel from './ReceiptModel';

import fixtures from '../../fixtures';

test('ReceiptModel', () => {
  const { receipt } = fixtures;

  const instance = new ReceiptModel({ ...receipt });
  expect(instance).not.toBeNull();
  expect(instance.id).toBe(receipt.id);
  expect(instance.menu).toEqual(receipt.menu);
  expect(instance.totalPrice).toBe(receipt.totalPrice);
});
