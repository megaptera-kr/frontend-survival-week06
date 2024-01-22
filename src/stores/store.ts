import { singleton } from 'tsyringe';
import Food from '../types/Food';

type Listner = () => void
@singleton()
export default class Store {
  menu: Food[] = [];

  listner = new Set<Listner>();

  addMenu(food: Food) {
    this.menu.push(food);
    this.forceUpdate();
  }

  removeMenu(index: number) {
    this.menu = this.menu.filter((_, i) => i !== index);
    this.forceUpdate();
  }

  clear() {
    this.menu = [];
    this.forceUpdate();
  }

  forceUpdate() {
    this.listner.forEach((listner) => listner());
  }

  addListener(listner: Listner) {
    this.listner.add(listner);
  }

  removeListener(listner: Listner) {
    this.listner.delete(listner);
  }
}
