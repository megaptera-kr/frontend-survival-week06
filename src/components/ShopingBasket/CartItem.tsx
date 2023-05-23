import { Food } from '../../types/Restaurant';

interface CartItemProps {
  menu: Food;
  index: number;
  handleClick: (index: number) => void;
}
export default function CartItem({ menu, index, handleClick }: CartItemProps) {
  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>
        {`${menu.name}(${menu.price.toLocaleString()}원)`}
      </span>
      <button
        type="button"
        style={{ marginLeft: '0.5rem' }}
        onClick={() => handleClick(index)}
      >
        취소
      </button>
    </li>
  );
}
