import {
  render, waitFor, screen, fireEvent,
} from '@testing-library/react';

import TextField from './TextField';

const context = describe;

describe('TextField ', () => {
  const label = '검색';
  const text = '테스트';
  const setText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder="식당 이름"
        text={text}
        setText={setText}
      />
    ));
  }

  it('renders TextField', async () => {
    renderTextField();
    await waitFor(() => {
      screen.getByText(label);
      screen.getByPlaceholderText(/식당 이름/);
      screen.getByDisplayValue(text);
    });
  });

  context('when your enters name', () => {
    it('calls “setText” handler', () => {
      renderTextField();
      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });

      expect(setText).toBeCalledWith('New Name');
    });
  });
});
