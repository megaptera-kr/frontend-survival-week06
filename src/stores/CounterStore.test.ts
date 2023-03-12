import CounterStore from './CounterStore';

test('CounterStore', () => {
  const counterStore = new CounterStore(); // counter store 생성

  const handleChange = jest.fn();

  counterStore.addListener(handleChange); // 구독을 한다

  counterStore.increase(10);

  expect(handleChange).toBeCalled();

  expect(counterStore.getSnapshot()).toEqual({ count: 10 });
});
