import { render, screen } from '@testing-library/react';
import TextField from './TextField';

describe('TextField', () => {
  const label = '검색';

  const setRestaurantName = jest.fn();
  const restaurantName = '메가반점';

  beforeEach(() => {
    // setText.mockClear();
    jest.clearAllMocks();
  });

  const renderComponent = () => render(
    <TextField
      label={label}
      placeholder="Input"
      setRestaurantName={setRestaurantName}
      restaurantName={restaurantName}
    />,
  );
  it('TextField render', () => {
    renderComponent();
    expect(screen.getByLabelText('검색')).toBeInTheDocument();
    screen.getAllByPlaceholderText(/Input/);
  });
});
