import type { Columns, RenderColumns } from '../../types/table';

type WithId<T> = {id: string} & T;

interface TableProps<T extends Record<string, unknown>> {
  caption: string;
  columns: Columns<T>;
  data: WithId<T>[]
  renderColumn: RenderColumns<T>;
}

export default function Table<T extends Record<string, unknown>>({
  caption, columns, data, renderColumn,
}: TableProps<T>) {
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          {columns.map((column) => <th key={column.key}>{column.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => <td key={column.key}>{renderColumn(column.key, item)}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
