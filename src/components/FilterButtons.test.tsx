import { fireEvent, render, screen } from '@testing-library/react';

import FilterButtons from './FilterButtons';

const setFilterCategory = jest.fn();

const context = describe;

describe('<FilterButtons />', () => {
  const categories = ['전체', '한식', '중식'];

  it('render filter buttons', () => {
    render(<FilterButtons
      categories={categories}
      setFilterCategory={setFilterCategory}
    />);

    screen.getByRole('button', { name: '전체' });
    screen.getByRole('button', { name: '중식' });
  });

  context('click category button', () => {
    it('execute click event handler', () => {
      render(<FilterButtons
        categories={categories}
        setFilterCategory={setFilterCategory}
      />);

      const button = screen.getByText('한식');

      fireEvent.click(button);

      expect(setFilterCategory).toHaveBeenCalledWith('한식');
    });
  });
});
