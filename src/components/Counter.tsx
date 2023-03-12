import useCounterStore from '../hooks/useCounterStore';

export default function Counter() {
  const [snapshot] = useCounterStore();

  return (
    <div>
      <p>
        Count:
        {' '}
        {snapshot.count}
      </p>
    </div>
  );
}
