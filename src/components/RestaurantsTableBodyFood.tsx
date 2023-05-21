import useCartStore from '../hooks/useCartStore';
import Food from '../types/food';
import Button from './atoms/button/Button';

type RestaurantsTableBodyFoodProps = {
  menu: Food[]
}

export default function RestaurantsTableBodyFood({ menu }: RestaurantsTableBodyFoodProps) {
  const [, cartStore] = useCartStore();

  const handleClick = (food: Food) => {
    cartStore.addItem(food);
  };
  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {menu.map((food: Food, index: number) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={`${food.id}-${index}`}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <p>{`${food.name}(${food.price.toLocaleString('ko-kr')}원)`}</p>
          <Button
            name={food.name}
            onClick={() => handleClick(food)}
          >
            선택
          </Button>
        </li>
      ))}
    </ul>
  );
}
