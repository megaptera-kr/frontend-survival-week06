import { useState } from 'react';
import OrderButton from './OrderButton';
import fixtures from '../../fixtures';
import Food from './Food';

export default function Cart() {
  // const [cartItems, setCartItems] = useState([]);
  const cartItems = fixtures.menu;

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {/* {cartItems.map((food) => (
          <Food
            key={food.id}
            food={food}
          >
            <button type="button">취소</button>
          </Food>
        ))} */}
      </ul>
      <OrderButton />
    </div>
  );
}
