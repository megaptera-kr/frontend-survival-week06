import TextField from './TextField';

export default function SearchBar() {
  return (
    <div>
      <TextField label='검색' placeholder='식당 이름...' />
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
        <li
          style={{
            marginRight: '1rem',
          }}
        >
          <button type='button'>한식</button>
        </li>
        <li
          style={{
            marginRight: '1rem',
          }}
        >
          <button type='button'>일식</button>
        </li>
        <li
          style={{
            marginRight: '1rem',
          }}
        >
          <button type='button'>중식</button>
        </li>
      </ul>
    </div>
  );
}
