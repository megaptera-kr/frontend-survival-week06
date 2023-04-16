import toLocaleCurrency from '../../utils/format';
import styles from './styles';
import useOrderStore from '../../hooks/useOrderStore';

export default function Receipt() {
  const [{ receipt }] = useOrderStore();

  if (!receipt) {
    return null;
  }

  return (
    <div>
      <p>[영수증 나오는 곳]</p>
      <div style={styles.receiptWrapper}>
        <h3>영수증</h3>
        <h4>주문번호</h4>
        {receipt.id}
        <h4>주문목록</h4>
        <ul>
          {receipt.menu?.map((item) => (
            <li key={item.id}>
              {item.name}
              (
              {toLocaleCurrency(item.price)}
              {' '}
              원)
            </li>
          ))}
        </ul>
        <p>
          총 가격:
          {' '}
          {toLocaleCurrency(receipt.totalPrice)}
          원
        </p>
      </div>
    </div>
  );
}
