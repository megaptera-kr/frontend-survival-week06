import Store from './Store';

export type CounterStoreSnapshot = {
  count:number
}

export default class CounterStore extends Store<CounterStoreSnapshot> {
  constructor() {
    super();
    this.takeSnapshot(0);
  }

  increase(step = 1) {
    this.update(step);
  }

  decrease(step = 1) {
    this.update(-step);
  }

  update(step: number) {
    this.takeSnapshot(step);
    this.publish();
  }

  takeSnapshot(step: number) {
    this.snapshot = this.snapshot.count === undefined
      ? { count: 0 }
      : { ...this.snapshot, count: this.snapshot.count + step };
  }
}
