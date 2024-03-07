import useFieldRef from '../hooks/useFieldRef';
import useTextField from '../hooks/useTextField';

type TextFieldProps = {
  label: string;
  placeholder?: string;
};

export default function TextField({ label, placeholder }: TextFieldProps) {
  const [, current] = useFieldRef('textfield');
  const [text, handleChange] = useTextField();

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
        placeholder={placeholder || ''}
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
