import usePostOrder from '../hooks/usePostOrder';
import priceToLocal from '../utils/priceToLocal';
import BasketList from './BasketList';
import BasketButton from './BasketButton';

import { Receipt } from '../types/receipt';
import useBasketStorage from '../hooks/useBasketStorage';

type BasketProps = {
  addReceipt: (receipt: Receipt) => void;
}

export default function Basket({ addReceipt }: BasketProps) {
  const {
    basket, totalPrice, clearBasket, removeMenu,
  } = useBasketStorage();
  const { postOrder } = usePostOrder();

  const handleClickOrder = async () => {
    const { id } = await postOrder();

    addReceipt({
      id,
      menu: basket,
      totalPrice,
    });
    clearBasket();
  };

  const handleClickCancel = () => {
    clearBasket();
  };

  return (
    <div
      style={{
        marginBottom: '3rem',
      }}
    >
      <h2>점심 바구니</h2>
      <BasketList
        basketList={basket}
        handleClickRemove={removeMenu}
      />
      <div>
        <p>
          총 주문 수:
          {' '}
          { basket.length}
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <BasketButton
          text={`합계: ${priceToLocal(totalPrice)}원 주문`}
          onClick={handleClickOrder}
          disabled={!basket.length}
        />
        <BasketButton
          text="취소"
          onClick={handleClickCancel}
        />
      </div>
    </div>
  );
}
