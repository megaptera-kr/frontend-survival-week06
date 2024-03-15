import useUUID from '../hooks/useUUID';

type FilterTextFieldProps = {
  label: string;
  placeholder: string
  filterText: string;
  setFilterText: (text: string) => void;
}

function FilterTextField({
  label, placeholder, filterText, setFilterText,
}: FilterTextFieldProps) {
  const searchInputId = useUUID('search-input');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label
        htmlFor={searchInputId}
        style={{ paddingRight: '1rem' }}
      >
        {label}
      </label>
      <input
        id={searchInputId}
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterTextField;
