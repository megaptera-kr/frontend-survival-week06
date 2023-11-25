import Layout from '../atoms/Layout';

import FetchController from './components/FetchController';
import Header from './components/Header';

export default function FoodKioskApp() {
  return (
    <Layout>
      <Header title='푸드코트 키오스크' />
      <FetchController />
    </Layout>
  );
}
