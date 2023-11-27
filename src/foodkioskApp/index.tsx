import { Layout } from '../atoms';

import FetchController from './components/FetchController';

import Header from './components/Header';

import Cart from './components/Cart';

import Categories from './components/Categories';

import SearchRestaurants from './components/SearchRestaurants';

import Menus from './components/Menus';

import Receipt from './components/Order';

export default function FoodKioskApp() {
  return (
    <Layout>
      <FetchController />
      <Header title='메가테라 푸드코트 키오스크' />
      <Cart title='점심 바구니' />
      <Receipt />
      <Categories />
      <SearchRestaurants
        htmlFor='input-검색'
        placeholder='식당 이름을 입력해 주세요.'
      />
      <Menus />
    </Layout>
  );
}
