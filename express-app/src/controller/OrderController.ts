import { Express, Request, Response } from 'express';

import Order from '../types/OrderType';
import OrderResponse from '../types/OrderResponseType';

function OrderController(app: Express) {
  app.post('/orders', (req: Request<Order>, res: Response) => {
    const order: Order = req.body;

    const orderId = Date.now().toString();

    // totalPrice 검증 코드 추가
    const response: OrderResponse = {
      id: orderId,
      menu: order.menu,
      totalPrice: order.totalPrice,
    };

    res.status(201).send(response);
  });
}

export default OrderController;
