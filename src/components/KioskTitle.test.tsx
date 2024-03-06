import { render, screen } from '@testing-library/react';

import KioskTitle from './KioskTitle';

test('ComponentTest: KioskTitle', () => {
  const title = '키오스크 타이틀';

  render(<KioskTitle title={title} />);

  screen.getByText(title);
});
