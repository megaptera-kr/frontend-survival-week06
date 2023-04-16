import { useLocalStorage } from 'usehooks-ts';

import useCreateOrder from '../hooks/useCreateOrder';

import Food from '../types/Food';

import CartItem from './CartItem';
import OrderButton from './OrderButton';
import { container } from 'tsyringe';
import useCartStore from '../hooks/useCartStore';


export default function Cart() {
    //const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);
    const [{ }, store] = useCartStore();
    //const { createOrder } = useCreateOrder();

    //const cartStore = container.resolve(CartStore);

    const handleClickCancel = (index: number) => {
        //cartStore.selectedFoods = cartStore.selectedFoods.filter((_, i) => i !== index);
        store.deleteFood(index);

    };

    const handleClickOrder = async () => {
        if (!store.selectedFoods.length) {

            return;
        }

        //const receipt = await createOrder(cartStore.selectedFoods);
        store.clear();
    };

    return (
        <div style={{ marginBottom: '3rem' }}>
            <h2>
                주문 바구니
            </h2>
            <ul style={{ width: '20%' }}>
                {store.selectedFoods.map((food, index) => {
                    const key = `${food.id}-${index}`;
                    console.log(food);
                    return (
                        <CartItem
                            key={key}
                            index={index}
                            food={food}
                            onClickCancel={handleClickCancel}
                        />
                    );
                })}
            </ul>
            <OrderButton
                foods={store.selectedFoods}
                onClick={handleClickOrder}
            />
        </div>
    );
}