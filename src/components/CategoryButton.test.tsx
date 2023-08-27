import { fireEvent, render, screen } from '@testing-library/react';

import CategoryButton from './CategoryButton';

describe('CategoryButton', () => {
  const category = '한식';
  const setFilterCategory = jest.fn();

  function renderCategory() {
    render((
      <CategoryButton
        category={category}
        setCategory={setFilterCategory}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('category를 렌더링 한다.', () => {
    renderCategory();

    screen.getByText('한식');
  });

  it('버튼을 클릭하면 setFilterCategory를 호출한다.', () => {
    renderCategory();

    fireEvent.click(screen.getByText('한식'));

    expect(setFilterCategory).toBeCalledWith(category);
  });
});
