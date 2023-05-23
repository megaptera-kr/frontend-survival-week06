type Props = {
  label: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextFiled({ label, placeholder, handleChange }:Props) {
  return (
    <div className="w-full flex justify-between items-center mb-4">
      <label
        className="text-xl mr-2 w-[10%]"
        htmlFor="search-input"
      >
        {label}
      </label>
      <input
        type="text"
        id="search-input"
        className="text-xl border-2 border-blue-300 focus:outline-none focus:border-blue-500 px-2 rounded-md w-[90%]"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
