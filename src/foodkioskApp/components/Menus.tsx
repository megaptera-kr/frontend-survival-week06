import { TableHead, Th, TableBody, Table, TableRow } from '../../atoms';

import useFilteredMenu from '../hooks/useFilteredMenu';

import ItemRow from './ItemRow';

import tableHeads from '../constans/tableHeads';

export default function Menus() {
  const { restaurants } = useFilteredMenu();

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeads.map((item) => (
            <Th key={item}>{item}</Th>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {restaurants?.map((restaurant) => (
          <ItemRow key={restaurant.id} restauant={restaurant} />
        ))}
      </TableBody>
    </Table>
  );
}
