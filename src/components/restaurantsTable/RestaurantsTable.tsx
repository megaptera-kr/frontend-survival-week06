import Table from '../table/Table';
import Menus from './menus/Menus';
import type { Restaurant } from '../../types/restaurants';
import type { Columns, RenderColumns } from '../../types/table';

interface RestaurantsTableProps {
  restaurants: Restaurant[]
}

type RestaurantsColumnKey = Omit<Restaurant, 'id'>;

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  const renderColumns: RenderColumns<RestaurantsColumnKey> = (key, data) => {
    switch (key) {
    case 'category':
    case 'name':
      return <span>{data[key]}</span>;

    case 'menu':
      return <Menus menus={data[key]} />;

    default: {
      const exhaustiveCheck: never = key;
      throw new Error(`unknown column key: ${exhaustiveCheck}`);
    }
    }
  };

  const columns: Columns<RestaurantsColumnKey> = [
    { key: 'category', label: '카테고리' },
    { key: 'name', label: '식당 명' },
    { key: 'menu', label: '메뉴' },
  ];

  return (
    <Table
      caption="식당 목록"
      columns={columns}
      data={restaurants}
      renderColumn={renderColumns}
    />
  );
}
