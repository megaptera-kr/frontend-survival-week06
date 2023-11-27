import styled from 'styled-components';

type ThProps = React.ComponentPropsWithoutRef<'th'>;

const Th = styled.th<ThProps>`
  text-align: left;
  padding: 1.2rem 0.8rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette['grey-300']}`};
  border-top: none;
  border-left: none;
  border-right: none;
`;

export default Th;
