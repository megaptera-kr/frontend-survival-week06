import { singleton } from 'tsyringe';

import BaseStore from './BaseStore';

import ReceiptPrinterModel from '../../models/ReceiptPrinterModel';
import ReceiptModel from '../../models/ReceiptModel';

export type ReceiptStoreSnapshot = {
  item: ReceiptModel;
};

@singleton()
class ReceiptStore extends BaseStore<ReceiptStoreSnapshot> {
  private receiptPrinterModel = new ReceiptPrinterModel();

  constructor() {
    super();
    this.takeSnapshot();
  }

  takeSnapshot() {
    this.snapshot = {
      item: this.receiptPrinterModel.item,
    };
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  addItem({ id, menu, totalPrice }: ReceiptModel) {
    const receipt = new ReceiptModel({ id, menu, totalPrice });
    this.receiptPrinterModel = this.receiptPrinterModel.addItem({ ...receipt });
    this.update();
  }

  clearItems() {
    this.receiptPrinterModel = this.receiptPrinterModel.clearItem();
    this.update();
  }
}

export default ReceiptStore;
