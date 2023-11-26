import { useCallback, useMemo } from 'react';

import useSelector from './useSelector';

import useDispatch from './useDispatch';

import { Food, Order, OrderResponse } from '../types';

import { ordersURL } from '../../api';

export default function useCart() {
  const addedFoods = useSelector((state) => state.addedFoods);

  const dispatch = useDispatch();

  const totalPrice = useMemo(
    () => addedFoods.reduce((acc, cur) => acc + (cur.price || 0), 0),
    [addedFoods],
  );

  const disabled = useMemo(() => addedFoods.length === 0, [addedFoods]);

  const addFood = useCallback(
    (item: Food) => {
      dispatch({ type: 'addFood', payload: item });
    },
    [dispatch],
  );

  const deleteFood = useCallback(
    (idx: number) => {
      dispatch({ type: 'deleteFood', payload: idx });
    },
    [dispatch],
  );

  const resetFoods = useCallback(() => {
    dispatch({ type: 'resetFoods', payload: [] });
  }, [dispatch]);

  const getOrder = useCallback(
    (order: Order) => {
      dispatch({
        type: 'getOrder',
        payload: order,
      });
    },
    [dispatch],
  );

  const getOrderSummary = useCallback(
    async (orderId: string) => {
      try {
        const response = await fetch(`${ordersURL}/${orderId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { order } = (await response.json()) as Omit<OrderResponse, 'id'>;

        getOrder(order);

        resetFoods();
      } catch (error) {
        resetFoods();
      }
    },
    [getOrder, resetFoods],
  );

  const getOrderId = useCallback(async (item: Order) => {
    try {
      const response = await fetch(ordersURL, {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = (await response.json()) as Omit<OrderResponse, 'order'>;
      return data;
    } catch (error) {
      return null;
    }
  }, []);

  const orderMenus = useCallback(
    async (total: number, menus: Food[]) => {
      const item: Order = {
        id: new Date().toISOString(),
        menu: menus,
        totalPrice: total,
      };

      const response = await getOrderId(item);

      if (response && response?.id) {
        const { id } = response;

        getOrderSummary(id);
      }
    },
    [getOrderId, dispatch],
  );

  return {
    addedFoods,
    disabled,
    totalPrice,
    addFood,
    deleteFood,
    orderMenus,
    resetFoods,
  };
}
