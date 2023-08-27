import foods from './foods';

import { Receipt } from '../src/types/receipt';

const receipt: Receipt = {
  id: 'RECEIPT_ID',
  menu: foods,
  totalPrice: foods.reduce((acc, cur) => acc + cur.price, 0),
};

export default receipt;
