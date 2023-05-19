import { Menu } from '../../types/restaurant';

type Props = {
  index: number
  name: string;
  menu: Menu;
  handleClick: () => void
}

export default function MenuItem({
  index, name, menu, handleClick,
}:Props) {
  return (
    <li className="w-full flex justify-between items-center px-2 first:mt-2 my-2 last:mb-2">
      <div className="w-[75%] text-center">
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </div>
      <button
        data-testid={`${name}-${index}`}
        className="w-[25%] py-1 px-2 bg-blue-200 rounded"
        type="button"
        onClick={handleClick}
        name={`#${menu.name}`}
      >
        {name}
      </button>
    </li>
  );
}
