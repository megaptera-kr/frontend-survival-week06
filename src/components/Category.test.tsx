import {
  render, screen, fireEvent,
} from '@testing-library/react';

import Category from './Category';

describe('RestaurantTable ', () => {
  const category = '한식';
  const onClick = jest.fn();

  function renderCategory() {
    render((
      <Category
        category={category}
        onClick={onClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Categories', async () => {
    renderCategory();
    screen.getByText('한식');
  });

  it('listens for category click event', () => {
    renderCategory();

    fireEvent.click(screen.getByText('한식'));

    expect(onClick).toBeCalledWith(category);
  });
});
