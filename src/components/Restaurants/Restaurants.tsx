import { Restaurants } from './Restaurants.interface';

interface RestaurantsProps {
  restaurants: Restaurants[];
}

function Restaurants({ restaurants } : RestaurantsProps) {
  return (
    <div>
      <h1>메뉴판</h1>
      <ul>
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
              {/* {restaurant.menuItems.map((menuItem) => (
                )} */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
