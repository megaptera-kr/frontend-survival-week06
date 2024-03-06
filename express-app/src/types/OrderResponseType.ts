import Menu from './MenuType';

type OrderResponse = {
  id: string;
  menu: Menu[];
  totalPrice: number;
};

export default OrderResponse;
