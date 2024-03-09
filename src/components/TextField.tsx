import { useRef } from 'react';

type TextFieldProps = {
  label: string;
  placeholder: string;
  text: string;
  setText: (value: string) => void;
};

export default function TextField({
  label,
  placeholder,
  text,
  setText,
}: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div>
      <label htmlFor={id.current}>
        {label}
        {' : '}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id.current}
        value={text}
        onChange={handlerChange}
      />
    </div>
  );
}
