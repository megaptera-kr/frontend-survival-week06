import { Menu } from '../../types';
import Grid from './Grid';

type Props = {
  menuItem: Menu;
  index: number;
  btnLabel?: string;
  onClick?: (payload: { menuItem: Menu; menuIndex: number }) => void;
};

function MenuItem({
  menuItem, index, btnLabel = '선택', onClick,
}: Props) {
  const handleClick = () => onClick && onClick({ menuItem, menuIndex: index });

  return (
    <Grid gridTemplateColumns="200px 100px" rowGap={16}>
      {`${menuItem.name}(${menuItem.price.toLocaleString()})원`}
      {onClick && (
        <button
          data-testid="PickFoodBtn"
          name={`#${menuItem.name}${btnLabel}`}
          onClick={handleClick}
        >
          {btnLabel}
        </button>
      )}
    </Grid>
  );
}

export default MenuItem;
