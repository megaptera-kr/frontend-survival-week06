import styled from 'styled-components';

type TableRowProps = React.ComponentPropsWithoutRef<'tr'>;

const TableRow = styled.tr<TableRowProps>`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette['grey-300']}`};

  &:last-child {
    border-bottom: none;
  }
`;

export default TableRow;
