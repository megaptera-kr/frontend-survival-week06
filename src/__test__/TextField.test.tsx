import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '../components/TextField';

const context = describe;

describe('TextField', () => {
  const setQuery = jest.fn();

  beforeEach(() => {
    setQuery.mockClear();
  });

  const renderTextField = () => {
    render(<TextField setQuery={setQuery} />);

    const inputEl = screen.getByPlaceholderText('식당 이름');

    return { inputEl };
  };

  it('Input element exists in the document', () => {
    const { inputEl } = renderTextField();
    expect(inputEl).toBeInTheDocument();
  });

  context('When the user enters text', () => {
    it('Call the change handler', () => {
      const { inputEl } = renderTextField();
      fireEvent.change(inputEl, { target: { value: '카레' } });
      expect(setQuery).toBeCalledWith('카레');
    });
  });
});
