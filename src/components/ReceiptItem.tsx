import Food from '../type/Food';

type ReceiptItem = {
  food : Food
}

export default function ReceiptItem({ food }: ReceiptItem) {
  return (
    <div>
      {food.name}
      {' ('}
      {food.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      {'원) '}
    </div>
  );
}
