import { fireEvent, render, screen } from '@testing-library/react';

import CategoryBtn from './CategoryBtn';

const context = describe;
describe('CategoryBtn', () => {
  const category = '중식';
  const setCategory = jest.fn();

  context('버튼이 클릭되었을때', () => {
    it('중식 카테고리로 setCategory 함수를 호출한다.', () => {
      render(<CategoryBtn category={category} setCategory={setCategory} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(setCategory).toBeCalledWith(category);
    });
  });
});
