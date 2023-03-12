import CounterStore from './CounterStore';

const context = describe;

describe('CounterStore', () => {
  let counterStore: CounterStore;

  beforeEach(() => {
    counterStore = new CounterStore();
  });

  it('addListener', () => {
    const handleChange = jest.fn();

    counterStore.addListener(handleChange);
    counterStore.increase();

    expect(handleChange).toBeCalled();
  });
  context('when click increase button', () => {
    it('count is 1', () => {
      counterStore.increase();

      expect(counterStore.getSnapshot()).toEqual({ count: 1 });
    });
  });
  context('when click increase 10 button', () => {
    it('count is 10', () => {
      const step = 10;

      counterStore.increase(step);

      expect(counterStore.getSnapshot()).toEqual({ count: 10 });
    });
  });
  context('when click decrease button', () => {
    it('count is -1', () => {
      counterStore.decrease();

      expect(counterStore.getSnapshot()).toEqual({ count: -1 });
    });
  });
  context('when click decrease 10 button', () => {
    it('count is -10', () => {
      const step = 10;

      counterStore.decrease(step);

      expect(counterStore.getSnapshot()).toEqual({ count: -10 });
    });
  });
});
