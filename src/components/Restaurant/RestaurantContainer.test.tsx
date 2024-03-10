import { render } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  it('renders without crash', () => {
    render(<RestaurantContainer />);
  });
});
