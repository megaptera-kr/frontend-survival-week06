import styled from 'styled-components';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = styled.button<ButtonProps>`
  ${(props) => props.theme.typography.body_02}
  min-width: 60px;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;

  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.black};

  &:hover {
    background: ${({ theme }) => theme.palette['grey-900']};
  }

  &:disabled {
    background: ${({ theme }) => theme.palette['grey-300']};
    color: ${({ theme }) => theme.palette['grey-700']};
    cursor: default;
  }

  &.cta-order-button {
    padding: 0.8rem;
    ${(props) => props.theme.typography.body_03}
    background: ${({ theme }) => theme.palette.white};
    border: ${({ theme }) => `1px solid ${theme.palette['green-500']}`};
    color: ${({ theme }) => theme.palette.black};

    &:hover {
      background: ${({ theme }) => theme.palette['green-400']};
      color: ${({ theme }) => theme.palette.white};
    }
  }

  &.category-button {
    padding: 0.8rem;
  }
`;

export default Button;
