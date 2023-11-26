import { HttpResponse, http } from 'msw';

import { getRataurantsURL, ordersURL } from '../api';

import restaurants from '../../fixtures/restaurants';

const handlers = [
  http.get(`${getRataurantsURL}`, () => HttpResponse.json({ restaurants }, { status: 200 })),

  http.post(`${ordersURL}`, () => HttpResponse.json({ id: Date.now().toString() }, { status: 201 })),

  http.get(`${ordersURL}/:id`, () => {
    const order = {
      id: '1701011909552',
      menu: [
        {
          id: '2',
          name: '짬뽕',
          price: 8000,
        },
        {
          id: '8',
          name: '갈비탕',
          price: 11000,
        },
        {
          id: '9',
          name: '돈까스',
          price: 1000,
        },
        {
          id: '10',
          name: '기본초밥',
          price: 14000,
        },
        {
          id: '14',
          name: '밥추가',
          price: 13000,
        },
      ],
      totalPrice: 47000,
    };

    return HttpResponse.json({ order }, { status: 200 });
  }),
];

export default handlers;
