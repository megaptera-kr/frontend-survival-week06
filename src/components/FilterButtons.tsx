type Props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

function FilterButtons({ categories, selectedCategory, setSelectedCategory }: Props) {
  return (
    <section>
      {
        categories && categories.map((item) => (
          <button
            className={`bg-slate-200 rounded-lg mx-4 px-2  hover:bg-violet-200 ${selectedCategory === item ? 'bg-violet-300' : ''}`}
            key={item}
            type="button"
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))
      }
    </section>

  );
}

export default FilterButtons;
