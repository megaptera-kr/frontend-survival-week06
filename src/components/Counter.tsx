/* eslint-disable react/jsx-one-expression-per-line */
import useCounterStore from '../hooks/useCounterStore';

export default function Counter() {
  const [snapshot] = useCounterStore();

  return (
    <div>
      <p>Count: {snapshot.count}</p>
    </div>
  );
}
