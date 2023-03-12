import CounterStore from './CounterStore';

test('CounterStore', () => {
  const counterStore = new CounterStore();

  // 가라 변경
  const handleChange = jest.fn();

  counterStore.addListener(handleChange);

  counterStore.increase(1);

  expect(handleChange).toBeCalled();

  expect(counterStore.getSnapshot()).toEqual({ count: 1 });

  counterStore.increase(2);

  expect(handleChange).toBeCalled();

  // 만약에 beforeEach 해서 초기화 하면 2
  expect(counterStore.getSnapshot()).toEqual({ count: 3 });
});
