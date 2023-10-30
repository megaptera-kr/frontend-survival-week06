import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = '검색';

  const placeholder = '식당 이름';

  const text = '메가반점';

  const setText = jest.fn();

  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder={placeholder}
        text={text}
        setText={setText}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders TextField', () => {
    renderTextField();

    screen.getByText(label);
    screen.getByPlaceholderText(placeholder);
    screen.getByDisplayValue(text);
  });

  context('when user enters restaurant', () => {
    it('calls "setText" handler', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: '메리김밥' },
      });

      expect(setText).toBeCalledWith('메리김밥');
    });
  });
});
