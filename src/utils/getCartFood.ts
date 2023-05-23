import useStore from '../hooks/useStore';

export default function getCartFood() {
  const store = useStore();
  const cart = (store.state.cart).map((food) => (
    JSON.parse(food)
  ));
  return cart;
}
