import { TableRow, Td, Ul, Li, Typography, Button } from '../../atoms';

import useCart from '../hooks/useCart';

import { Restaurant } from '../types';

type RowProps = {
  restauant: Restaurant;
};

export default function ItemRow({ restauant }: RowProps) {
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
