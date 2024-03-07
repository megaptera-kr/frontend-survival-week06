import React from 'react';

type CategoryButtonProps = {
  content: string;
  clickButton: (v: string) => void;
};

export default function CategoryButton({
  content,
  clickButton,
}: CategoryButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    clickButton(e.currentTarget.value);
  };

  return (
    <li
      style={{
        marginRight: '1rem',
      }}
    >
      <button type='button' value={content} onClick={handleClick}>
        {content}
      </button>
    </li>
  );
}
