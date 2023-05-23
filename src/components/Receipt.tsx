import useStore from '../hooks/useStore';
import Food from '../type/Food';
import ReceiptItem from './ReceiptItem';

export default function Receipt() {
  const store = useStore();
  const receipt = JSON.parse(store.state.receipt);
  console.log(receipt);
  return (
    <div>
      <h1>영수증</h1>
      <p>주문번호</p>
      <p>{receipt.id}</p>
      <h3>주문목록</h3>
      {
        (receipt.menu).map((food:Food, index:number) => {
          const key = `${index}-${food}`;
          return (
            <ReceiptItem key={key} food={food} />
          );
        })
      }
      <h4>
        {'총 가격: '}
        {receipt.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원
      </h4>
    </div>
  );
}
