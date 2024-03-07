import React from 'react';

type CategoryButtonProps = {
  categoryName: string;
  setCategoryName: (v: string) => void;
};

export default function CategoryButton({
  categoryName,
  setCategoryName,
}: CategoryButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategoryName(e.currentTarget.value);
  };

  return (
    <li
      style={{
        marginRight: '1rem',
      }}
    >
      <button type='button' value={categoryName} onClick={handleClick}>
        {categoryName}
      </button>
    </li>
  );
}
