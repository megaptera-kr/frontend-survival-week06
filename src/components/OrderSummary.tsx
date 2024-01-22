import Food from '../types/Food';

type OrderSummary = {
    selectedMenu: Food[]
}

export default function OrderSummary({ selectedMenu }:OrderSummary) {
  const sum = selectedMenu.reduce((acc:number, food) => acc + food.price, 0);
  const menuCount = selectedMenu.length;
  return (
    <div>
      <h2>
        주문내역
        {menuCount}
        개
      </h2>
      <p>
        총 결제 예상금액
        {' '}
        {sum.toLocaleString()}
        원
      </p>
    </div>
  );
}
