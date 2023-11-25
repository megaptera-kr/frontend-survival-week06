import styled from 'styled-components';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = styled.button<ButtonProps>`
  cursor: pointer;
`;

export default Button;
