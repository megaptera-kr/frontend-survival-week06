import React from 'react';

type Props = {
  categories: string[];
  setSelectedCategory: (value: string) => void;
}

function FilterButtons({ categories, setSelectedCategory }: Props) {

  return (
    <section>
      {
        categories && categories.map((item) => <button key={item} type="button" onClick={() => setSelectedCategory(item)}>{item}</button>)
      }
    </section>

  );
}

export default FilterButtons;
