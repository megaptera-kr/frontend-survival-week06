export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <div style={{ marginBottom: '3rem' }}>
        <h2>주문 바구니</h2>
        <ul style={{ width: '20%' }}>
          <li
            style={{
              display: 'flex',
              paddingBlock: '.5rem',
            }}
          >
            <span>짜장면(8,000원)</span>
          </li>
        </ul>
        <button type='button'>합계: 8,000 원 주문</button>
      </div>

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
