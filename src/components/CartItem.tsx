import Food from '../type/Food';

type CartItem = {
  food :Food
}

export default function CartItem({ food }: CartItem) {
  return (
    <div>
      {food.name}
      {' ('}
      {food.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      {'원) '}
    </div>
  );
}
