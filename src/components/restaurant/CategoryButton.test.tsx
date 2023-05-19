import {
  act, render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CategoryButton from './CategoryButton';

const context = describe;

describe('Category Button', () => {
  const handleCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  function renderCategoryButton() {
    render(<CategoryButton
      name="전체"
      handleCategory={handleCategory}
    />);
  }
  context('랜더링 되었을 때', () => {
    it('지정한 이름이 화면에 출력된다.', () => {
      renderCategoryButton();

      expect(screen.getByText('전체')).toBeInTheDocument();
    });
  });

  context('사용자가 버튼을 클릭하면', () => {
    it('버튼이 호출된다', async () => {
      renderCategoryButton();
      const button = screen.getByRole('button', { name: '전체' });

      act(() => {
        userEvent.click(button);
      });

      await waitFor(() => {
        expect(handleCategory).toBeCalledTimes(1);
      });
    });
  });
});
