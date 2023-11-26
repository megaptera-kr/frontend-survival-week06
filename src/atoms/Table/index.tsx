import styled from 'styled-components';

type TableProps = React.ComponentPropsWithoutRef<'table'>;

const Table = styled.table<TableProps>`
  width: 100%;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.palette.white};
`;

export default Table;
