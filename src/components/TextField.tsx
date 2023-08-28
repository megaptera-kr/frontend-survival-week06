import { useRef } from 'react';

type TextFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

export default function TextField({
  label, placeholder, value, setValue,
}: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = event.target;
    setValue(targetValue);
  };

  return (
    <div>
      <label htmlFor={id.current}>
        {label}
      </label>
      <input
        id={id.current}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
