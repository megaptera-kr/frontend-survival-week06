import { fireEvent, render, screen } from '@testing-library/react';
import CategoryBtns from '../components/CategoryBtns';

const context = describe;

describe('<CategoryBtns />', () => {
  const categories = ['중식', '한식', '일식'];
  const setCategory = jest.fn();

  context('When the user clicks the button', () => {
    it('Call the click handler', () => {
      render(<CategoryBtns categories={categories} setCategory={setCategory} />);
      fireEvent.click(screen.getByText('중식'));
      expect(setCategory).toBeCalledWith('중식');
    });
  });
});
