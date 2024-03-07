import Food from '../types/FoodType';

type MenuItemProps = {
  menuItem: Food;
};

export default function MenuItem({ menuItem }: MenuItemProps) {
  const { name, price } = menuItem;
  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '.5rem',
      }}
    >
      <span style={{ margin: '0 auto' }}>
        {name}({price})
      </span>
      <button style={{ marginLeft: '.5rem' }} type='button'>
        선택
      </button>
    </li>
  );
}
