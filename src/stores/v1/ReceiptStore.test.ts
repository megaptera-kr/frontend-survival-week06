import ReceiptStore from './ReceiptStore';

import fixtures from '../../../fixtures';

const context = describe;

describe('ReceiptStore', () => {
  let store = new ReceiptStore();

  const addItemToStore = () => {
    const { receipt } = fixtures;
    store.addItem({ ...receipt });
  };

  beforeEach(() => {
    store = new ReceiptStore();
  });

  context('ReceiptStore 객체가 최초로 생성되었을 때', () => {
    it('snapshot 의 아이템은 빈 오브젝트를 리턴한다.', () => {
      const { item } = store.getSnapshot();
      expect(item).toEqual({});
    });
  });

  context('addItem 메서드는', () => {
    it('receipt 정보를 snapshot 에 등록한다.', () => {
      addItemToStore();
      const { item } = store.getSnapshot();
      expect(item).toEqual(item);
    });
  });

  context('clear 메서드는', () => {
    it('snapshot 를 초기화시킨다.', () => {
      addItemToStore();
      store.clear();
      const { item } = store.getSnapshot();
      expect(item).toEqual({});
    });
  });
});
