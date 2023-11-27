import styled from 'styled-components';

type InputProps = React.ComponentPropsWithoutRef<'input'>;

const Input = styled.input<InputProps>`
  width: 100%;
  height: 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.4rem 1.6rem;

  border: none;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.textColor};

  background: ${({ theme }) => theme.backgroundColor};

  &:focus {
    outline: none;
    border: ${({ theme }) => `1px solid ${theme.palette['blue-900']}`};
  }

  &:hover {
    outline: none;
    border: ${({ theme }) => `1px solid ${theme.palette['blue-900']}`};
  }

  &::placeholder {
    font-size: 1.4rem;
  }
`;

export default Input;
