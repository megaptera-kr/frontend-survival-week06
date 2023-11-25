import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';

import { render } from '@testing-library/react';

import theme from '../../styles/theme';

type TestWrraperProps = { children: React.ReactNode };

function Wrapper({ children }: TestWrraperProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const useRender = (children: JSX.Element | JSX.Element[]) => render(<Wrapper>{children}</Wrapper>);

export default useRender;
