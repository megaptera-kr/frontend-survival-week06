import { useCallback, useState } from 'react';

const useForceUpdate = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setState] = useState({});
  return useCallback(() => {
    setState({});
  }, []);
};

export default useForceUpdate;
