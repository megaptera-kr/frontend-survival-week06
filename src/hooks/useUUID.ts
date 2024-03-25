import { useRef } from 'react';

import { v4 as uuid } from 'uuid';

export default function useUUID(value: string) {
  const id = useRef(`${value}-${uuid()}`);

  return id.current;
}
