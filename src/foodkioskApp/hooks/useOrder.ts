import { useEffect, useMemo } from 'react';

import useSelector from './useSelector';

import useDispatch from './useDispatch';

export default function useOrder() {
  const order = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const isExistOrder = useMemo(() => {
    const { id, totalPrice, menu } = order;

    if (menu && id && totalPrice) {
      return true;
    }

    return false;
  }, [order]);

  useEffect(() => {
    if (isExistOrder) {
      const timeout = setTimeout(() => {
        dispatch?.({ type: 'deleteOrder', payload: {} });
      }, 5000);

      return () => clearTimeout(timeout);
    }

    return () => null;
  }, [isExistOrder]);

  return { order, isExistOrder };
}
