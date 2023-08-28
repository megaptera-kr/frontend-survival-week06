import Food from '../types/Food';

type MenuProps = {
  food: Food,
  children:React.ReactNode
}

export default function Menu({ food, children }: MenuProps) {
  const { name, price } = food;

  return (
    <li>
      <span>
        {name}
        (
        {price.toLocaleString()}
        원)
      </span>
      {children}
    </li>
  );
}
