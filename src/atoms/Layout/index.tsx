import React from 'react';

import Stack from '../Stack';

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return <Stack $direction='column'>{children}</Stack>;
}
