import useCartStore from '../hooks/useCartStore';
import CartButtons from './CartButtons';
import CartItem from './CartItem';
import Summary from './Summary';

export default function CartField() {
  const [{ cart }, store] = useCartStore();

  const handleClickCartCancel = (index: number) => {
    store.cancelCart(index);
  };

  const handleClickAllCancel = () => {
    store.clear();
  };

  const handleClickOrderButton = async () => {
    if (!cart.length) {
      return;
    }

    store.clear();
  };

  return (
    <div>
      <Summary
        selectedMenu={cart}
      />
      <ul>
        {
          cart.map((cartItem, index) => {
            const key = `cart-${cartItem.name}-${index.toString()}`;

            return (
              <CartItem
                key={key}
                cart={cartItem}
                index={index}
                onClickCancel={handleClickCartCancel}
              />
            );
          })
        }
      </ul>
      <CartButtons
        onClickAllCancel={handleClickAllCancel}
        onClickOrder={handleClickOrderButton}
      />
    </div>
  );
}
