import CounterStore from './CounterStore';

describe('CounterStore', () => {
  const counterStore = new CounterStore();
  const handleChange = jest.fn();

  counterStore.addListener(handleChange);
  
  it('increase', () => {
    counterStore.increase();
    expect(handleChange).toBeCalled();
    expect(counterStore.getSnapshot()).toEqual({ count: 1 });
  });
  
  it('decrease', () => {
    counterStore.decrease();
    expect(handleChange).toBeCalled();
    expect(counterStore.getSnapshot()).toEqual({ count: 0 });
  });
});
