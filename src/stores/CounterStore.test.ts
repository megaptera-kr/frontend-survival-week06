import CounterStore from './CounterStore';

const context = describe;

describe('CounterStore', () => {
  let counterStore: CounterStore;

  beforeEach(() => {
    counterStore = new CounterStore();
  });

  context('there is no arguments', () => {
    it('increase count with one', () => {
      counterStore.increase();

      expect(counterStore.getSnapshot()).toEqual({ count: 1 });
    });

    it('decrease count with one', () => {
      counterStore.decrease();

      expect(counterStore.getSnapshot()).toEqual({ count: -1 });
    });
  });

  context('there is no arguments', () => {
    it('increase count as much as argument', () => {
      counterStore.increase(10);

      expect(counterStore.getSnapshot()).toEqual({ count: 10 });

      counterStore.increase(3);

      expect(counterStore.getSnapshot()).toEqual({ count: 13 });
    });

    it('decrease count as much as argument', () => {
      counterStore.decrease(10);

      expect(counterStore.getSnapshot()).toEqual({ count: -10 });

      counterStore.decrease(3);

      expect(counterStore.getSnapshot()).toEqual({ count: -13 });
    });
  });
});
