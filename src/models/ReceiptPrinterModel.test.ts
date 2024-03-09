import ReceiptPrinterModel from './ReceiptPrinterModel';
import ReceiptModel from './ReceiptModel';

import fixtures from '../../fixtures';

const context = describe;

describe('ReceiptPrinterModel', () => {
  const { receipt } = fixtures;
  const receiptModel = new ReceiptModel({ ...receipt });

  let receiptPrinterModel = new ReceiptPrinterModel();

  beforeEach(() => {
    receiptPrinterModel = new ReceiptPrinterModel();
  });

  context('ReceiptPrinterModel 을 생성, ', () => {
    context('item을 설정하지 않았을 때, ', () => {
      it('item 은 {} 와 같다.', () => {
        expect(receiptPrinterModel.item).toEqual({});
      });
    });

    context('item을 설정했을 때, ', () => {
      it('items {} 가 아니다.', () => {
        const instance = new ReceiptPrinterModel(receiptModel);

        expect(instance.item).not.toEqual({});
        expect(instance.item).toEqual(receiptModel);
      });
    });
  });

  context('addItem 은', () => {
    it('아이템을 정상적으로 등록한다.', () => {
      receiptPrinterModel = receiptPrinterModel.addItem(receiptModel);
      expect(receiptPrinterModel.item).toEqual(receiptModel);
    });
  });

  context('clearItems 은', () => {
    it('아이템을 초기화시켜서 {} 로 만든다..', () => {
      receiptPrinterModel.clearItem();
      expect(receiptPrinterModel.item).toEqual({});
    });
  });

  context('clearItems 은(item 값이 있는 경우)', () => {
    it('아이템을 초기화시켜서 {} 로 만든다..', () => {
      receiptPrinterModel = receiptPrinterModel.addItem(receiptModel);
      expect(receiptPrinterModel.item).toEqual(receiptModel);

      receiptPrinterModel = receiptPrinterModel.clearItem();
      expect(receiptPrinterModel.item).toEqual({});
    });
  });
});
