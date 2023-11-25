import { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';
import { column, row, center } from '../../styles/utilStyles';

interface StackProps extends ComponentPropsWithoutRef<'div'> {
  $direction?: 'row' | 'column' | 'center';
}

const Stack = styled.div<StackProps>`
  ${({ $direction }) => {
    switch ($direction) {
      case 'column':
        return css`
          ${column};
        `;

      case 'row':
        return css`
          ${row};
        `;

      case 'center':
        return css`
          ${center};
        `;

      default:
        return null;
    }
  }}
`;

export default Stack;
