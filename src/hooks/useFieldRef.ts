import { useRef } from 'react';

import { v4 as uuidv4 } from 'uuid';

function useFieldRef(value: string): [React.MutableRefObject<string>, string] {
  const id = useRef(`${value}-${uuidv4()}`);

  return [id, id.current];
}

export default useFieldRef;
