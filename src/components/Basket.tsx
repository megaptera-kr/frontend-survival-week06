import usePostOrder from '../hooks/usePostOrder';
import priceToLocal from '../utils/priceToLocal';
import BasketList from './BasketList';
import BasketButton from './BasketButton';

import { Receipt } from '../types/receipt';
import useBasketStore from '../hooks/useBasketStore';

type BasketProps = {
  addReceipt: (receipt: Receipt) => void;
}

export default function Basket({ addReceipt }: BasketProps) {
  const [{ basket, totalPrice }, store] = useBasketStore();
  const { postOrder } = usePostOrder();

  const handleClickOrder = async () => {
    const { id } = await postOrder();

    addReceipt({
      id,
      menu: basket,
      totalPrice,
    });
    store.clearBasket();
  };

  const handleClickRemoveMenu = (index: number) => {
    store.removeMenu(index);
  };

  const handleClickCancel = () => {
    store.clearBasket();
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
        handleClickRemove={handleClickRemoveMenu}
      />
      <div>
        <p>
          주문내역
          {basket.length}
          개
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
          name="주문하기"
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
