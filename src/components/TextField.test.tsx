import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const text = 'Tester';
  const setText = jest.fn();

  function renderTextField() {
    render((
      <TextField
        text={text}
        setText={setText}
      />
    ));
  }

  it('render elements', () => {
    renderTextField();

    screen.getByLabelText(/검색/);
    screen.getByDisplayValue(text);
  });

  context('when user enters name', () => {
    it('calls “setText” handler', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(/검색/), {
        target: { value: 'New Name' },
      });

      expect(setText).toBeCalledWith('New Name');
    });
  });
});
