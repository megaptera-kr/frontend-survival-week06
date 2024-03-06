import KioskTitle from './components/KioskTitle';
import Cart from './components/Cart';

export default function App() {
  return (
    <div>
      <KioskTitle title='푸드코트 키오스크' />
      <Cart />
      <div>
        <div>
          <div>
            <label htmlFor='search'>검색</label>
            <input type='text' id='search' placeholder='검색..' />
          </div>
        </div>
        <ul
          style={{
            display: 'flex',
            padding: 0,
            listStyle: 'none',
          }}
        >
          <li
            style={{
              marginRight: '1rem',
            }}
          >
            <button type='button'>전체</button>
          </li>
        </ul>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th style={{ paddingInline: '2rem' }}>식당 이름</th>
              <th>종류</th>
              <th>메뉴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>짜장면</td>
              <td>중식</td>
              <td>
                <ul>
                  <li
                    style={{
                      display: 'flex',
                      paddingBlock: '.5rem',
                    }}
                  >
                    <span style={{ margin: '0 auto' }}>짜장면(8,000원)</span>
                    <button style={{ marginLeft: '.5rem' }} type='button'>
                      선택
                    </button>
                  </li>
                  <li
                    style={{
                      display: 'flex',
                      paddingBlock: '.5rem',
                    }}
                  >
                    <span style={{ margin: '0 auto' }}>짜장면(8,000원)</span>
                    <button style={{ marginLeft: '.5rem' }} type='button'>
                      선택
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>짜장면</td>
              <td>중식</td>
              <td>
                <ul>
                  <li
                    style={{
                      display: 'flex',
                      paddingBlock: '.5rem',
                    }}
                  >
                    <span style={{ margin: '0 auto' }}>짜장면(8,000원)</span>
                    <button style={{ marginLeft: '.5rem' }} type='button'>
                      선택
                    </button>
                  </li>
                  <li
                    style={{
                      display: 'flex',
                      paddingBlock: '.5rem',
                    }}
                  >
                    <span style={{ margin: '0 auto' }}>짜장면(8,000원)</span>
                    <button style={{ marginLeft: '.5rem' }} type='button'>
                      선택
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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
