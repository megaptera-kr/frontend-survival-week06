import { useReceiptStorage } from '../hooks/useStorage';
import useReceiptInterval from '../hooks/useReceiptInterval';
import MenuItem from '../components/MenuItem';

function Receipt() {
  const { receipt } = useReceiptStorage();

  useReceiptInterval();

  return (
    <article data-testid="Receipt">
      <h2>[영수증 나오는 곳]</h2>
      {receipt && (
        <>
          <h2>영수증</h2>
          <section>
            <h3>주문번호</h3>
            <p>{receipt?.id}</p>
          </section>
          <section>
            <h3>주문목록</h3>
            <ul>
              {receipt?.menu.map((menu, index) => (
                <li key={`${menu.id}_${index}`}>
                  <MenuItem menuItem={menu} index={index} />
                </li>
              ))}
            </ul>
            <p>
              총 가격:
              {receipt.totalPrice.toLocaleString()}
              원
            </p>
          </section>
        </>
      )}
    </article>
  );
}

export default Receipt;
