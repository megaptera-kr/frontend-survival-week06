import Menu from '../types/Menu';

import getTotalPrice from '../utils/getTotalPrice';

type SummaryProps = {
  selectedMenu: Menu[];
}

export default function Summary({ selectedMenu }: SummaryProps) {
  const totalPrice = getTotalPrice(selectedMenu);

  const count = selectedMenu.length;

  return (
    <div>
      <h2>
        <span>
          주문내역
        </span>
        <span>
          {count}
          개
        </span>
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
