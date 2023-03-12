import useCounterStore from '../hooks/useCounterStore';

export default function Counter() {
  const [snapshot] = useCounterStore();
  const { count } = snapshot;
  return (
    <div>
      <p>
        Count:
        {' '}
        {count}
      </p>
    </div>
  );
}
