import { useState } from 'react';
import { fetchPostOrders } from '../utils/apiService';
import { PostOrdersResponse } from '../../types';
import { ApiError } from '../../api';
import { useCartStorage, useReceiptStorage } from './useStorage';
import createReceiptData from '../utils/createReceiptData';

const useFetchOrders = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState('');
  const { cart, setCart } = useCartStorage();
  const { setReceipt } = useReceiptStorage();

  const request = async () => {
    try {
      const receipt = createReceiptData(cart);
      const res = await fetchPostOrders(receipt);
      setData(res);

      return res;
    } catch (error: unknown) {
      const err = error as ApiError;

      setError(err.message);
    }
  };

  const payment = async () => {
    try {
      const res = await request();

      setCart([]);

      res && setReceipt(res);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    request, data, error, payment,
  };
};

export default useFetchOrders;
