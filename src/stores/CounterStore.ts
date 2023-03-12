import Store from './Store';

export type CounterStoreSnapshot = {
  count: number;
}

export default class CounterStore extends Store<CounterStoreSnapshot> {
  count = 0;

  constructor() {
    super();
    this.takeSnapshot();
  }

  increase() {
    this.count += 1;

    this.update();
  }

  decrease() {
    this.count -= 1;

    this.update();
  }
  
  private update() {
    this.takeSnapshot();
    this.publish();
  }

  private takeSnapshot() {
    this.snapshot = {
      count: this.count,
    };
  }
}
