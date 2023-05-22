import Food from '../types/Food';

type FoodProps = {
  food: Food,
  children:any
}

export default function Food({ food, children }: FoodProps) {
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
