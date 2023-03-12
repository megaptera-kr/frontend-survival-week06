import CounterStore from './CounterStore';

test('CounterStore', () => {
  const counterStore = new CounterStore();

  const handleChange = jest.fn();

  counterStore.addListener(handleChange);

  counterStore.increase(3);

  expect(handleChange).toBeCalled();

  expect(counterStore.getSnapshot()).toEqual({ count: 3 });
});
