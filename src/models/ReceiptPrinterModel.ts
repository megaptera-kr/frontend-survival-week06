import Receipt from '../types/ReceiptType';
import ReceiptModel from './ReceiptModel';

const emptyReceiptModel = {} as Receipt;

class ReceiptPrinterModel {
  readonly empty = emptyReceiptModel;

  readonly item: ReceiptModel = emptyReceiptModel;

  constructor({ id, menu, totalPrice }: ReceiptModel = emptyReceiptModel) {
    this.item = { id, menu, totalPrice };
  }

  addItem({ id, menu, totalPrice }: ReceiptModel) {
    const item = { ...this.item };
    item.id = id;
    item.menu = menu;
    item.totalPrice = totalPrice;
    return new ReceiptPrinterModel(item);
  }

  clearItem() {
    return new ReceiptPrinterModel(this.empty);
  }
}

export default ReceiptPrinterModel;
