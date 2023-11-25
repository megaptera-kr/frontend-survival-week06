import Grid from './components/Grid';
import Cart from './containers/Cart';
import Receipt from './containers/Receipt';
import Restaurants from './containers/Resturants';
import './styles.css';

export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Grid gridTemplateColumns="0.5fr 1fr 300px" columnGap={16} rowGap={16}>
        <Cart />
        <Restaurants />
        <Receipt />
      </Grid>

    </div>
  );
}
