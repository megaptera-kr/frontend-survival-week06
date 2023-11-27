import Button from './Button';

type CategoryType = {
  category: string;
  onClick: (text: string) => void;
}

export default function Category({ category, onClick }: CategoryType) {
  return (
    <li style={{ listStyle: 'none', marginRight: '1rem' }}>
      <Button type="button" title={category} onClick={() => onClick(category)} />
    </li>
  );
}
