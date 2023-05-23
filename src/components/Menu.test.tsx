import { render, screen } from '@testing-library/react';
import Menu from './Menu';

const context = describe;

describe('Menu', () => {
  const food = {
    id: 'FOOD_ID',
    name: '짜장면',
    price: 8_000,
    image: 'IMAGE',
  };

  const handleClickButton = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders foods list', () => {
    render((
      <Menu food={food}>
        <button
          type="button"
          onClick={handleClickButton}
        >
          클릭
        </button>
      </Menu>
    ));

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
  });
});
