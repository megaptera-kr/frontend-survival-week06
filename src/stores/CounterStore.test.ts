import CounterStore from './CounterStore';

describe('CounterStore', () => {
  const counterStore = new CounterStore();

  const handleChange = jest.fn();

  counterStore.addListener(handleChange);

  it('increase', () => {
    counterStore.increase(1000);
    expect(handleChange).toBeCalled();
    expect(counterStore.getSnapshot()).toEqual({ count: 1000 });
  });

  it('decrease', () => {
    counterStore.decrease(500);
    expect(handleChange).toBeCalled();
    expect(counterStore.getSnapshot()).toEqual({ count: 500 });
  });
});
