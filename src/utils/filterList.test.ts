import { RestaurantList } from '../../types';
import filterList from './filterList';

describe('filterList', () => {
  // keyword, data가 없으면 그대로 반환한다.

  const list: RestaurantList = [
    {
      id: '1',
      category: '중식',
      name: '메가반점',
      menu: [
        {
          id: '1',
          name: '짜장면',
          price: 8000,
        },
        {
          id: '2',
          name: '짬뽕',
          price: 8000,
        },
        {
          id: '3',
          name: '차돌짬뽕',
          price: 9000,
        },
        {
          id: '4',
          name: '탕수육',
          price: 14000,
        },
      ],
    },
    {
      id: '2',
      category: '한식',
      name: '메리김밥',
      menu: [
        {
          id: '5',
          name: '김밥',
          price: 3500,
        },
        {
          id: '6',
          name: '참치김밥',
          price: 4500,
        },
        {
          id: '7',
          name: '제육김밥',
          price: 5000,
        },
        {
          id: '8',
          name: '훈제오리김밥',
          price: 5500,
        },
      ],
    },
    {
      id: '3',
      category: '일식',
      name: '혹등고래카레',
      menu: [
        {
          id: '9',
          name: '기본카레',
          price: 9000,
        },
        {
          id: '10',
          name: '가라아게카레',
          price: 14000,
        },
        {
          id: '11',
          name: '소시지카레',
          price: 13000,
        },
        {
          id: '12',
          name: '돈까스카레',
          price: 14000,
        },
        {
          id: '13',
          name: '닭가슴살카레',
          price: 13000,
        },
      ],
    },
    {
      id: '4',
      category: '일식',
      name: '메가고래카레',
      menu: [
        {
          id: '12',
          name: '돈까스카레',
          price: 14000,
        },
        {
          id: '13',
          name: '닭가슴살카레',
          price: 13000,
        },
      ],
    },
  ];

  test('필터 유형, 필터 키워드가 없으면 받은 필터 행위 없이 리스트 그대로 반환한다.', () => {
    const filtered = filterList<RestaurantList>(list);

    expect(filtered).toBe(list);
  });

  test('필터 유형을 식당 이름, 필터 키워드를 메가반점으로 할 경우 식당 이름이 메가반점인 식당 이름 목록을 반환한다.', () => {
    const filtered = filterList<RestaurantList>(list, { category: 'name', keyword: '메가반점' });

    expect(filtered).toStrictEqual([
      {
        id: '1',
        category: '중식',
        name: '메가반점',
        menu: [
          {
            id: '1',
            name: '짜장면',
            price: 8000,
          },
          {
            id: '2',
            name: '짬뽕',
            price: 8000,
          },
          {
            id: '3',
            name: '차돌짬뽕',
            price: 9000,
          },
          {
            id: '4',
            name: '탕수육',
            price: 14000,
          },
        ],
      },
    ]);
  });

  test('필터 유형을 식당 유형, 필터 키워드를 일식으로 할 경우 식당 유형이 일식인 식당 이름 목록을 반환한다.', () => {
    const filtered = filterList<RestaurantList>(list, { category: 'category', keyword: '한식' });

    expect(filtered).toStrictEqual([
      {
        id: '2',
        category: '한식',
        name: '메리김밥',
        menu: [
          {
            id: '5',
            name: '김밥',
            price: 3500,
          },
          {
            id: '6',
            name: '참치김밥',
            price: 4500,
          },
          {
            id: '7',
            name: '제육김밥',
            price: 5000,
          },
          {
            id: '8',
            name: '훈제오리김밥',
            price: 5500,
          },
        ],
      },
    ]);
  });

  test('필터 유형을 식당 유형과 식당 이름, 필터 키워드를 일식과 닭가슴살카레로 할 경우 이에 매칭되는 리스트가 반환된다.', () => {
    const filtered = filterList<RestaurantList>(list, [{ category: 'category', keyword: '일식' }, { category: 'name', keyword: '카레' }]);

    expect(filtered).toStrictEqual([{
      id: '3',
      category: '일식',
      name: '혹등고래카레',
      menu: [
        {
          id: '9',
          name: '기본카레',
          price: 9000,
        },
        {
          id: '10',
          name: '가라아게카레',
          price: 14000,
        },
        {
          id: '11',
          name: '소시지카레',
          price: 13000,
        },
        {
          id: '12',
          name: '돈까스카레',
          price: 14000,
        },
        {
          id: '13',
          name: '닭가슴살카레',
          price: 13000,
        },
      ],
    },
    {
      id: '4',
      category: '일식',
      name: '메가고래카레',
      menu: [
        {
          id: '12',
          name: '돈까스카레',
          price: 14000,
        },
        {
          id: '13',
          name: '닭가슴살카레',
          price: 13000,
        },
      ],
    }]);
  });
});
