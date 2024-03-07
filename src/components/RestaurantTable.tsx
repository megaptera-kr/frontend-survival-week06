type RestaurantTableProps = {
  buttonValue: string;
};

export default function RestaurantTable({ buttonValue }: RestaurantTableProps) {
  return (
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
  );
}
