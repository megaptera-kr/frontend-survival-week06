import { fireEvent, screen } from '@testing-library/react';

import useRender from '../../../tests/utils';

import context from '../utils/test_config';

import { Table, TableBody } from '../../atoms';

import ItemRow from './ItemRow';

const addFood = jest.fn();

jest.mock('../hooks/useCart', () => () => ({
  addFood,
}));

describe('ItemRow Render', () => {
  const restauant = {
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
        name: '탕수육',
        price: 14000,
      },
    ],
  };

  context('view', () => {
    it('restaurant', async () => {
      useRender(
        <Table>
          <TableBody>
            <ItemRow restauant={restauant} />
          </TableBody>
        </Table>,
      );

      const textList = [/중식/, /메가반점/, /짜장면/, /짬뽕/, /탕수육/];

      textList.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });
  });

  context('addFood event', () => {
    beforeEach(() => {
      addFood.mockClear();
    });

    it('calls event when a food is clicked', async () => {
      useRender(
        <Table>
          <TableBody>
            <ItemRow restauant={restauant} />
          </TableBody>
        </Table>,
      );

      const button = screen.getByRole('button', { name: '짜장면' });

      fireEvent.click(button);

      expect(addFood).toHaveBeenCalledWith({
        id: '1',
        name: '짜장면',
        price: 8000,
      });
    });
  });
});
