import {
  PostOrdersPayload, GetRestaurantsResponse, Receipt,
} from '../../types';
import { Path, httpRequest } from '../../api';

export let fetchGetRestaurants = async () => {
  const res = await httpRequest<GetRestaurantsResponse>(Path.restaurants, 'get');

  return res;
};

export let fetchPostOrders = async (payload: PostOrdersPayload): Promise<Receipt> => {
  const res = await httpRequest<string>(Path.orders, 'post', payload);

  return { ...payload, id: res.data };
};

export let mocking = {
  fetchGetRestaurants,
  fetchPostOrders,
};
