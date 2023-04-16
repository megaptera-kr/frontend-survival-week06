import MenuItem from "./MenuItem";
import Food from "../types/Food";
import { container } from 'tsyringe';
import CartStore from '../stores/CartStore';

type MenuProps = {
    menu: Food[];
}


export default function Menu({ menu }: MenuProps) {

    //const [selectedFoods, selectFood] = useLocalStorage<Food[]>('cart', []);
    const cartStore = container.resolve(CartStore);

    const handleClickSelect = (food: Food) => {
        cartStore.addFood(food);
        console.log(food);
        console.log(cartStore.selectedFoods);
        // selectFood([
        //     ...selectedFoods,
        //     food,
        // ]);
    };

    return (
        <ul>
            {menu.map((food, id) => {
                const key = `${food.id} - ${id}`;

                return (
                    <MenuItem key={key} food={food} >
                        <button
                            style={{ marginLeft: '.5rem' }}
                            name={`#${food.name}`}
                            type="button"
                            onClick={() => handleClickSelect(food)}
                        >
                            선택
                        </button>
                    </MenuItem>
                );

            })}
        </ul >
    );
}