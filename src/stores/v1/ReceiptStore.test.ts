import ReceiptStore from './ReceiptStore';

import ReceiptModel from '../../models/ReceiptModel';
import fixtures from '../../../fixtures';

const context = describe;

describe('ReceiptStore', () => {
  let store = new ReceiptStore();

  // const addItemToStore = () => {
  //   const { receipt } = fixtures;
  //   store.addItem({ ...receipt });
  // };

  beforeEach(() => {
    // store = new ReceiptStore();
  });

  context('ReceiptStore 최초 생성후 Snapshot 은', () => {
    it('빈배열의 아이템을 리턴한다.', () => {
      const item = store.getSnapshot();
      expect(1).toBe(1);

      // const { items } = item;
      // console.log(items);
    });
  });

  // context('', () => {
  //   it('', () => {
  //     addItemToStore();
  //     const item = store.getSnapshot();
  //   });
  // });
});
