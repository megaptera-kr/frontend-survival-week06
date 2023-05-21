import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

const context = describe;

describe('Button ', () => {
  const handleClick = jest.fn();
  const buttonProps = {
    name: '#Button',
    value: 'buttonValue',
    onClick: handleClick(),
  };
  const children = 'buttonChildren';

  const renderComponent = () => render(
    <Button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
    >
      {children}
    </Button>,
  );

  context('component props check ', () => {
    it('children에 맞춰 text 잘 들어가는지 체크', () => {
      renderComponent();
      expect(screen.getByRole('button')).toHaveTextContent(children);
    });

    it('buttonProps에 맞는 Button value 체크', () => {
      renderComponent();
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('name', buttonProps.name);
    });
  });

  context('button onclick check ', () => {
    it('onclick 함수 호출 되는지 체크', () => {
      renderComponent();
      fireEvent.click(screen.getByText(children));
      expect(handleClick).toBeCalledTimes(1);
    });
  });
});
