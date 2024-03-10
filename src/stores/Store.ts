import { singleton } from 'tsyringe';

type Listener = () => void

type Item = {
  id : string;
  name : string;
  price : number;
  quantity : number;
}

@singleton()
export default class Store {
  items :Item[] = [];

  listeners = new Set<Listener>();

  addItem(item :Item) {
    // const index = this.items.findIndex((i) => i.id === item.id);

    return this.insertItem(item);
  }

  removeAllItems() {
    this.items = [];
    this.publish();
  }

  publish() {
    this.listeners.forEach((listener) => {
      listener();
    });
  }

  addListener(listener : Listener) {
    this.listeners.add(listener);
  }

  removeListener(listener : Listener) {
    this.listeners.delete(listener);
  }

  insertItem(item : Item) {
    this.items = [...this.items, item];
    this.publish();
  }

  updateItem(index:number, item : Item) {
    const existingQuantity = this.items[index].quantity;

    this.items = [
      ...this.items.slice(0, index),
      { ...item, quantity: item.quantity + existingQuantity },
      ...this.items.slice(index + 1)];
    this.publish();
  }
}
