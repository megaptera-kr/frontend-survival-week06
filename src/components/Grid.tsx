import { ReactNode } from 'react';

function Grid({
  children, gridTemplateColumns = '1fr', columnGap = 16, rowGap = 16,
}: { children: ReactNode; gridTemplateColumns?: string; columnGap?: number; rowGap?: number; }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns, columnGap, rowGap,
    }}
    >
      {children}
    </div>
  );
}

export default Grid;
