import {
  PostOrdersPayload, GetRestaurantsResponse, PostOrdersResponse, GetOrdersResponse, GetOrdersPayload,
} from '../../types';
import { Path, httpRequest } from '../../api';

export let fetchGetRestaurants = async () => {
  const res = await httpRequest<GetRestaurantsResponse>(Path.restaurants, 'get');

  return res;
};

export let fetchPostOrders = async (payload: PostOrdersPayload) => {
  const res = await httpRequest<PostOrdersResponse>(Path.orders, 'post', payload);

  return { ...res, data: { id: res.data } };
};

export let fetchGetOrders = async (payload: GetOrdersPayload) => {
  const { id } = payload;
  const url = Path.getOrders.replace(':id', id);

  const res = await httpRequest<GetOrdersResponse>(url, 'get');

  return { ...res, data: { order: res.data } };
};

export let mocking = {
  fetchGetRestaurants,
  fetchPostOrders,
};
