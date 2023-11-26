import { TableHead,
  Th,
  TableBody,
  Table,
  Button,
  Li,
  TableRow,
  Td,
  Ul,
  Typography } from '../../atoms';

import useCart from '../hooks/useCart';

import useFilteredMenu from '../hooks/useFilteredMenu';

import { Restaurant } from '../types';

import tableHeads from '../constans/tableHeads';

type RowProps = {
  restauant: Restaurant;
};

function Row({ restauant }: RowProps) {
  const { name, category, menu } = restauant;

  const { addFood } = useCart();

  return (
    <TableRow>
      <Td>{name}</Td>
      <Td>{category}</Td>
      <Td>
        <Ul>
          {menu.map(({ id, name: itemName, price }) => (
            <Li key={`${id}-${itemName}-${price}`}>
              <Typography>{`${itemName}(${price.toLocaleString()}원)`}</Typography>
              <Button
                aria-label={itemName}
                type='button'
                role='button'
                name={itemName}
                onClick={() => addFood({ id, name: itemName, price })}
              >
                선택
              </Button>
            </Li>
          ))}
        </Ul>
      </Td>
    </TableRow>
  );
}

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
          <Row key={restaurant.id} restauant={restaurant} />
        ))}
      </TableBody>
    </Table>
  );
}
