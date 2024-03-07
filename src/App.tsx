import KioskTitle from './components/KioskTitle';
import Cart from './components/Cart';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';

export default function App() {
  return (
    <div>
      <KioskTitle title='푸드코트 키오스크' />
      <Cart />
      <FilterableRestaurantsTable />
      <div
        style={{
          width: '50%',
          border: '1px solid black',
          textAlign: 'center',
        }}
      >
        <p>[영수증 나오는 곳]</p>
        <h2>영수증</h2>
        <div>
          <h3>주문번호</h3>
          <p>123123213</p>
        </div>
        <div>
          <h3>주문목록</h3>
          <ul
            style={{
              padding: 0,
              listStyle: 'none',
            }}
          >
            <li
              style={{
                display: 'flex',
                paddingBlock: '.5rem',
              }}
            >
              <span style={{ margin: '0 auto' }}>짜장면(8,000원)</span>
            </li>
          </ul>
        </div>
        <p>총 가격: 8,000원</p>
      </div>
    </div>
  );
}
