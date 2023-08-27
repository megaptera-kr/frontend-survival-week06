import { render, fireEvent, screen } from '@testing-library/react';

import MenuList from '../components/MenuList';

import fixtures from '../../fixtures';

const context = describe;

describe('MenuList', () => {
  const { foods } = fixtures;
  const food = foods[0];

  const handleClickBtn = jest.fn();

  context('선택 버튼을 눌렀을 때', () => {
    it('아이템을 추가한다.', () => {
      render((<MenuList food={food} onClickBtn={handleClickBtn} />));
      fireEvent.click(screen.getByRole('button'));
      expect(handleClickBtn).toHaveBeenCalledWith(food);
    });
  });
});
