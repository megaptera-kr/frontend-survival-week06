import express from 'express';
import cors from 'cors';

import CategoryController from './src/controller/CategoriesController';
import RestaurantController from './src/controller/RestaurantsController';
import OrderController from './src/controller/OrderController';

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello, World!'));

CategoryController(app);
RestaurantController(app);
OrderController(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});
