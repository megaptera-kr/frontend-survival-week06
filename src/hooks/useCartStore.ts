import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';
import CartStore from '../stores/Cartstore';

export default function useCartStore() {
    const cartStore = container.resolve(CartStore);

    return useStore(cartStore);
}