import { render } from '@testing-library/react';

import FilterableTable from './FilterableTable';

describe('FilterableTable', () => {
  it('renders Without crash', () => {
    render(<FilterableTable />);
  });
});
