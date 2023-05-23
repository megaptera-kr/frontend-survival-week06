import {
  act, render, screen, waitFor,
} from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import fixtures from '../../../fixtures';
import MenuItem from './MenuItem';

const context = describe;

describe('MenuItem', () => {
  const handleClick = jest.fn();
  function renderMenuItem() {
    render(<MenuItem
      index={1}
      name="선택"
      menu={fixtures.foods[0]}
      handleClick={handleClick}
    />);
  }
  context('메뉴 데이터를 전달하면', () => {
    it('메뉴 이름, 가격, 선택 버튼이 랜더링 된다', () => {
      renderMenuItem();

      expect(screen.getByText('짜장면(8,000원)')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '선택' })).toBeInTheDocument();
    });
  });
  context('사용자가 버튼을 클릭하면', () => {
    it('함수가 호출된다', async () => {
      renderMenuItem();

      const button = screen.getByRole('button', { name: '선택' });

      act(() => {
        useEvent.click(button);
      });

      await waitFor(() => {
        expect(handleClick).toBeCalled();
      });
    });
  });
});
