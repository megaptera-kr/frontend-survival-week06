import React from 'react';

interface FilterButtonsProps {
  categories : string[];
  setFilterCategory : React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterButtons({
  categories,
  setFilterCategory,
}
  : FilterButtonsProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const category = event.currentTarget.textContent || '전체';

    setFilterCategory(category);
  };

  return (
    <ul style={{ display: 'flex' }}>
      {
        categories.map((category) => (
          <li key={category}>
            <button
              type="button"
              onClick={handleClick}
            >
              {category}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
