import fixtures from '../../../fixtures';

const useFetchRestaurants = jest.fn(() => ({
  restaurants: fixtures.restaurants,
}));

export default useFetchRestaurants;
