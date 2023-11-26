import { useLocalStorage } from 'usehooks-ts';
import Button from './Button';
import CartItem from './CartItem';
import calculateTotalPrice from '../utils/calculateTotalPrice';
import useCreateOrder from '../hooks/useCreateOrder';

import type Food from '../types/Food';

type CartType = {
  setReceiptId: (receiptId: string) => void;
}

export default function Cart({ setReceiptId }: CartType) {
  const [selectMenu, setSelectMenu] = useLocalStorage<Food[]>('cart', []);
  const { createOrder } = useCreateOrder();
  const totalPrice = calculateTotalPrice(selectMenu);

  const handleClickOrder = async () => {
    if (!selectMenu.length) {
      return;
    }

    const receiptId = await createOrder(selectMenu);

    setReceiptId(receiptId);
    setSelectMenu([]);
  };

  const handleClickCancel = (index: number) => {
    const foods = selectMenu.filter((_, i) => i !== index);
    setSelectMenu(foods);
  };

  const handleAllCancel = () => {
    setSelectMenu([]);
  };

  return (
    <div style={{ width: '20%', marginBottom: 20 }}>
      <h2>점심 바구니</h2>
      <ul>
        {
          selectMenu.map((menu: Food, idx: number) => {
            const key = `${menu.id}-${idx}`;
            return (
              <CartItem item={menu} key={key} index={idx} onClickCancel={handleClickCancel} />
            );
          })
        }
      </ul>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          {`${totalPrice.toLocaleString()}원`}
        </span>
        <span>
          {`주문내역${selectMenu.length}개`}
        </span>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type="button" title="주문하기" onClick={handleClickOrder} />
        <Button type="button" title="주문취소" onClick={handleAllCancel} />
      </section>
    </div>
  );
}
