import Store from './Store';

export type CounterStoreSnapshot = {
  count : number;
}

export default class CounterStore extends Store<CounterStoreSnapshot> {
  private count = 0;

  constructor() {
    super();
    this.count = 0;
    this.takeSnapshot();
  }

  increase(step = 1) {
    this.count += step;
    this.update();
  }

  decrease(step = 1) {
    this.count -= step;
    this.update();
  }

  update() {
    this.takeSnapshot();
    this.publish();
  }

  takeSnapshot() {
    this.snapshot = { ...this.snapshot, count: this.count };
  }
}
