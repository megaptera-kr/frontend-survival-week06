import { useStore } from 'usestore-ts';
import { RestaurantList } from '../../types';
import MenuItem from '../components/MenuItem';
import { Loading } from './Resturants';
import Grid from '../components/Grid';
import cartStore from '../stores/cartStore';

function ResturantsList({
  resturantsList,
}: {
  resturantsList: RestaurantList;
}) {
  const [, store] = useStore(cartStore);

  if (!resturantsList) return <Loading />;

  return (
    <div data-testid="ResturantsList">
      {resturantsList.map((row) => (
        <ul
          data-testid={`ResturantsItem${row.id}`}
          key={row.id}
        >
          <Grid gridTemplateColumns=".3fr .3fr 1fr">
            <li>{row.name}</li>
            <li>{row.category}</li>
            <li>
              <ul className="row lv2">
                {row.menu.map((menuItem, index) => (
                  <li key={index}>
                    <MenuItem
                      menuItem={menuItem}
                      index={index}
                      onClick={({ menuItem }) => { store.addCartItem(menuItem); }}
                    />
                  </li>
                ))}
              </ul>
            </li>
          </Grid>
        </ul>
      ))}
    </div>
  );
}

export default ResturantsList;
