import Menu from '../Menu/Menu';
import { RestaurantsInterface } from './Restaurants.interface';

interface RestaurantsProps {
  restaurants: RestaurantsInterface[];
}

function Restaurants({ restaurants } : RestaurantsProps) {
  return (
    <div>
      <ul className="restaurants">
        {restaurants.map((restaurant) => (
          <li key={`restaurant_${restaurant.id}`}>
            <div>
              <p>
                상호명 :
                {' '}
                {restaurant.name}
              </p>
              <p>
                업종 :
                {' '}
                {restaurant.category}
              </p>
            </div>
            <div>
              <Menu menues={restaurant.menu} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
