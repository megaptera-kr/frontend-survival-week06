import { useState } from 'react';

export default function useForceUpdate() {
  const [state, setState] = useState({});
  const forceUpdate = () => {
    setState({ ...state });
  };

  return forceUpdate;
}
