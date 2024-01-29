type TextFieldProps = {
    setQuery: (query: string) => void;
    query: string;
    placeholderText: string;
}
export default function TextField({ setQuery, query, placeholderText }:TextFieldProps) {
  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };
  return (
    <>
      <label htmlFor="search-id">검색</label>
      <input id="search-id" placeholder={placeholderText} value={query} onChange={handleChangeQuery} />
    </>
  );
}
