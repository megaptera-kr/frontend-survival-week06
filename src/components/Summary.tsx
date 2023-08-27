import Food from '../types/Food';

type SummaryProps = {
    cart: Food[];
}

export default function Summary({
  cart,
}: SummaryProps) {
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div>
      <h2>
        <div>
          <span>주문내역</span>
          <span>
            {cart.length}
            개
          </span>
        </div>
      </h2>
      <div>
        총 결제 예상금액
        {' '}
        <strong>
          {totalPrice.toLocaleString()}
        </strong>
        원
      </div>
    </div>
  );
}
