import { Menu } from '../types/restaurant';

type Props = {
  menu: Menu;
}

export default function MenuItem({ menu }:Props) {
  return (
    <li className="flex justify-between px-2 first:mt-2 my-2 last:mb-2">
      <div className="w-[75%]">
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </div>
      <button
        className="w-[25%] py-1 px-2 bg-blue-200 rounded"
        type="button"
      >
        선택
      </button>
    </li>
  );
}
