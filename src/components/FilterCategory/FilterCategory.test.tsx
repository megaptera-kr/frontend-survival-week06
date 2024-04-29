import { render, screen } from '@testing-library/react';
import FilterCategory from '.';
import { Category } from '../../types/Category';

const context = describe;

describe('FilterCategory 컴포넌트', () => {
  const categories:Category[] = ['전체', '한식'];

  beforeEach(() => {
    render(<FilterCategory categories={categories} />);
  });

  context('categories를 props로 전달 받으면', () => {
    it('categories의 화면에 렌더링한다.', () => {
      expect(screen.getByText(/전체/));
      expect(screen.getByText(/한식/));
    });

    it('categories 배열 길이만큼 button을 렌더링한다.', () => {
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(categories.length);
    });

    it('각 button은 name 속성에 #category 속성을 가진다.', () => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach(
        (button, index) => expect(button).toHaveAttribute(
          'name',
          `#${categories[index]}`,
        ),
      );
    });
  });
});
