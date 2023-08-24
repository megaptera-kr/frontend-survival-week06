import useOrderStore from '../hooks/useOrderStore';
import Food from '../types/Food';

export default function MenuItem({
  food,
  isButtonHidden = false,
}: {
  food: Food;
  isButtonHidden: boolean;
}) {
  const [{ cart }, store] = useOrderStore();

  const { name, price } = food;

  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <label htmlFor={`#${name}`} style={{ margin: '0px auto' }}>{`${name}(${price}원)`}</label>
      {!isButtonHidden && (
        <button
          id={`#${name}`}
          name={`#${name}`}
          type="button"
          style={{ marginLeft: '0.5rem' }}
          onClick={() => store.setCart?.([...cart, food])}
        >
          선택
        </button>
      )}
    </li>
  );
}
