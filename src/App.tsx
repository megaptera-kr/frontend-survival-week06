import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {

  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <ul>{restaurants && restaurants.map((item, index) => {
        return (<li key={item.id}>{item.name}</li>);
      })
      }</ul>
    </div>
  );
}
