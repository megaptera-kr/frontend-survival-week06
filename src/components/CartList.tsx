import useCartStore from '../hooks/useCartStore';
import Food from '../types/food';
import Button from './atoms/button/Button';

export default function CartList() {
  const [, cartStore] = useCartStore();
  const { snapshot } = cartStore;

  const handleRemoveItem = (index: number) => {
    cartStore.removeItem(index);
  };
  return (
    <ul style={{ padding: '0', listStyle: 'none' }}>
      {snapshot.items.map((food: Food, index: number) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={`${food.id}-${index}`}
          style={{ display: 'flex', justifyContent: 'space-between', minWidth: '200px' }}
        >
          <p>{`${food.name}(${food.price.toLocaleString('ko-kr')}원)`}</p>
          <Button
            onClick={() => handleRemoveItem(index)}
          >
            X
          </Button>
        </li>
      ))}
    </ul>
  );
}
