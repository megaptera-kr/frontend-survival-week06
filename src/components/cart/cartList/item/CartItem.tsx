import { FoodWithCount } from '../../../../types/cart';
import { calcPrice } from '../../../../utils/cart';

interface CartItemProps {
  cartItem: FoodWithCount,
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function CartItem({ cartItem, onDecrease, onIncrease }: CartItemProps) {
  return (
    <div style={{ display: 'flex' }}>
      <ul>
        <li>{cartItem.name}</li>
        <li>{`개수: ${cartItem.count}개`}</li>
        <li>{`가격: ${calcPrice(cartItem)}원`}</li>
      </ul>
      <div>
        <button type="button" aria-label={`${cartItem.name} 개수 감소`} onClick={onDecrease}>-</button>
        <button type="button" aria-label={`${cartItem.name} 개수 증가`} onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
