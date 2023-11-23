import { rest } from 'msw';

const BASE_URL = 'http://localhost:3000';

export const handlers = [

    rest.get(`${BASE_URL}/test`, (req, res, ctx) => {
        const test_data = [
            {
               test : "test-sample"
            },
        ];
        return res (
            ctx.json(test_data)
        )
    }),
    rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
        const products = [
            {
                category: 'Fruits', price: '$1', stocked: true, name: 'Apple',
            },
        ];

        return res(
            ctx.json({ products }),
        );
    }),
];
export default handlers;