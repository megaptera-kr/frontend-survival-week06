import styled from 'styled-components';

type TdProps = React.ComponentPropsWithoutRef<'td'>;

const Td = styled.td<TdProps>`
  text-align: left;
  padding: 1.2rem 0.8rem;

  &:nth-child(1) {
    width: 35%;
  }

  &:nth-child(2) {
    width: 15%;
  }

  &:nth-child(3) {
    width: 50%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  ul > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    border: ${({ theme }) => `2px solid ${theme.palette['green-400']}`};
    border-radius: 0.4rem;
    padding: 0.4rem;
    background: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.black};

    button:hover {
      background: ${({ theme }) => theme.palette['green-900']};
    }
  }
`;

export default Td;
