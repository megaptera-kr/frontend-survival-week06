import Store from './Store';

export type CounterStoreSnapshot = {
  count: number;
}

export default class CounterStore extends Store<CounterStoreSnapshot> {
  constructor() {
    super();
    this.takeSnapshot();
  }

  increase(step = 1) {
    this.update(step);
  }

  decrease(step = 1) {
    this.update(-step);
  }

  update(step: number) {
    this.takeSnapshot();
    this.snapshot = { count: this.snapshot.count + step };
    this.publish();
  }

  private takeSnapshot() {
    this.snapshot = this.snapshot.count === undefined
      ? { count: 0 }
      : { count: this.snapshot.count };
  }
}
