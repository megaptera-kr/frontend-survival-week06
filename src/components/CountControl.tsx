import useCounterStore from '../hooks/useCounterStore';

export default function CountControl() {
  const [, counterStore] = useCounterStore();

  return (
    <div>
      <button type="button" onClick={() => counterStore.increase()}>
        Increase
      </button>
      <button type="button" onClick={() => counterStore.increase(10)}>
        Increase 10
      </button>
      <button type="button" onClick={() => counterStore.decrease()}>
        Decrease
      </button>
      <button type="button" onClick={() => counterStore.decrease(10)}>
        Decrease 10
      </button>
    </div>
  );
}
