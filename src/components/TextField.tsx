import useFieldRef from '../hooks/useFieldRef';

type TextFieldProps = {
  label: string;
  placeholder?: string;
  text: string;
  setText: (v: string) => void;
};

export default function TextField({
  label,
  placeholder = '',
  text,
  setText,
}: TextFieldProps) {
  const [, current] = useFieldRef('textfield');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <label htmlFor={current} style={{ marginRight: '1rem' }}>
        {label}
      </label>
      <input
        type='text'
        placeholder={placeholder}
        id={current}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

TextField.defaultProps = {
  placeholder: '',
};
