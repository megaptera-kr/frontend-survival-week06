// eslint-disable-next-line import/no-extraneous-dependencies
// import 'whatwg-fetch';
import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

// export default function useFetchRestaurants() {
//   const [restaurantsData, setRestaurantsData] = useState([]);

//   const fetchRestaurants = async () => {
//     const url = 'http://localhost:3000/restaurants';
//     const response = await fetch(url);
//     const { restaurants } = await response.json();

//     setRestaurantsData(restaurants);
//   };

//   useEffectOnce(() => {
//     fetchRestaurants();
//   });

//   return restaurantsData;
// }

export default async function fetchRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const response = await fetch(url);
  const { restaurants } = await response.json();
  return restaurants; // 프로미스가 반환
}
