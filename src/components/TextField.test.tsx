import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = 'Name';
  const value = 'Tester';

  const setValue = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder="Input your name"
        value={value}
        setValue={setValue}
      />
    ));
  }

  it('labe, value, placeholder를 렌더링 한다.', () => {
    renderTextField();

    screen.getByLabelText(label);
    screen.getByPlaceholderText(/Input/);
    screen.getByDisplayValue(value);
  });

  context('input에 name을 입력하면', () => {
    it('입력한 값을 인자로 setText가 호출된다.', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });

      expect(setValue).toBeCalledWith('New Name');
    });
  });
});
