import useCartStore from '../../hooks/useCartStore';
import MenuItem from '../common/MenuItem';

export default function Cart() {
  const [{ cart }, store] = useCartStore();
  return (
    <ul className="w-full min-h-[50%] flex flex-col items-center border-2 border-blue-300 p-4">
      {cart.map((menu, index) => {
        const key = `${menu.id}-${index}`;
        return (
          <MenuItem
            key={key}
            index={index}
            name="취소"
            menu={menu}
            handleClick={() => store.removeMenu(index)}
          />
        );
      })}
    </ul>
  );
}
