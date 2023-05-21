import express from 'express';
import cors from 'cors';
import restaurant from './data';

const port = 3000;

const app = express();

interface Food {
  id: string,
  name: string,
  price: number,
}

interface Order {
  id: string,
  menu: Food[],
  totalPrice: number,
}

const state: { orders: Order[] } = {
  orders: [],
};

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/orders/:id', (req, res) => {
  const { id } = req.params;

  const { orders } = state;
  const order = orders.find((i) => i.id === id);

  if (!order) {
    res.status(404).send({});
    return;
  }

  res.status(200).send({ order });
});

app.post('/orders', (req, res) => {
  const {
    menu,
    totalPrice,
  } = req.body;

  const order = {
    id: Date.now().toString(),
    menu,
    totalPrice,
  };

  state.orders = [
    ...state.orders,
    order,
  ];

  res.status(201).send({ id: order.id });
});

app.get('/restaurants', (req, res) => {
  const restaurants = restaurant;
  res.send({ restaurants });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});
