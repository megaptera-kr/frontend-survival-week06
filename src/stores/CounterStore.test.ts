import CounterStore from './CounterStore';

const context = describe;

describe('CounterStore', () => {
  let counterStore: CounterStore;

  const handleChange = jest.fn();

  beforeEach(() => {
    counterStore = new CounterStore();
  });
  context('when click increase button', () => {
    it('count is 1', () => {
      counterStore.addListener(handleChange);

      counterStore.increase();

      expect(handleChange).toBeCalled();

      expect(counterStore.getSnapshot()).toEqual({ count: 1 });
    });
  });
  context('when click increase 10 button', () => {
    it('count is 10', () => {
      const step = 10;

      counterStore.addListener(handleChange);

      counterStore.increase(step);

      expect(handleChange).toBeCalled();

      expect(counterStore.getSnapshot()).toEqual({ count: 10 });
    });
  });
  context('when click decrease button', () => {
    it('count is -1', () => {
      counterStore.addListener(handleChange);

      counterStore.decrease();

      expect(handleChange).toBeCalled();

      expect(counterStore.getSnapshot()).toEqual({ count: -1 });
    });
  });
  context('when click decrease 10 button', () => {
    it('count is -10', () => {
      const step = 10;

      counterStore.addListener(handleChange);

      counterStore.decrease(step);

      expect(handleChange).toBeCalled();

      expect(counterStore.getSnapshot()).toEqual({ count: -10 });
    });
  });
});
