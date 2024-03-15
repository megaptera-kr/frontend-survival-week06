import Food from '../types/Food';

type MenuItemProps = {
  food: Food;
  handleClickSelect: (food: Food) => void;
}
function MenuItem({ food, handleClickSelect }: MenuItemProps) {
  const { name, price } = food;

  return (

    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <button
        type="button"
        onClick={() => handleClickSelect(food)}
      >
        <span style={{ margin: '0px auto' }}>
          {name}
          (
          {price.toLocaleString()}
          원)
        </span>

        선택
      </button>
    </li>
  );
}

export default MenuItem;
