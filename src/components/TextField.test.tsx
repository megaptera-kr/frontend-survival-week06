import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;
describe('TextField', () => {
  const query = '메가';
  const setQuery = jest.fn();
  const placeholderText = '검색어 입력';
  context('검색창이 초기 렌더링 되었을때', () => {
    it('query 값이 표시된다.', () => {
      render(<TextField setQuery={setQuery} query={query} placeholderText={placeholderText} />);
      const input = screen.getByLabelText('검색') as HTMLInputElement;
      expect(input?.value).toBe(query);
    });
  });

  context('query의 값을 바꾸었을때', () => {
    it('setQuery의 값이 새롭게 호출된다', () => {
      render(<TextField setQuery={setQuery} query={query} placeholderText={placeholderText} />);
      const newQuery = '포도';
      const input = screen.getByLabelText('검색') as HTMLInputElement;
      expect(input?.value).toBe(query);
      fireEvent.change(input, { target: { value: newQuery } });
      expect(setQuery).toBeCalledWith(newQuery);
    });
  });
});
