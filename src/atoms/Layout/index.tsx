import React from 'react';

import styled from 'styled-components';
import Stack from '../Stack';

type LayoutProps = { children: React.ReactNode };

const Wrraper = styled(Stack)`
  row-gap: 1.6rem;
`;

export default function Layout({ children }: LayoutProps) {
  return <Wrraper $direction='column'>{children}</Wrraper>;
}
