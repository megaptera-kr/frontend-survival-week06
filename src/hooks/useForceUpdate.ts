import { useCallback, useState } from 'react';

export default function useForceUpdate<T>() {
  const [, setState] = useState<T>({} as T);
  return useCallback(() => setState({} as T), []);
}
