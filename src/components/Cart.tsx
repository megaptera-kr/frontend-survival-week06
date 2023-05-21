import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

import { Menu } from '../types/restaurants';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state);
  const { menuList: data } = cart;

  return (
    <section>
      <h2>🧺 점심 바구니 </h2>
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>✔️ 주문하기</button>
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>🗑️ 취소하기</button>
      <dt>합계</dt>
      <dd>
        {cart.sum}
        원
        (
        {cart.count}
        )
      </dd>
      <ul>
        {data && data.map((item : Menu, index: number) => {
          const key = `${item.id}-${index}`;

          return (
            <li key={key}>
              {item.name}
              {item.price}
              <button
                type="button"
                onClick={() => dispatch({ type: 'remove', payload: { ...item, index } })}
              >
                ✖️
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
