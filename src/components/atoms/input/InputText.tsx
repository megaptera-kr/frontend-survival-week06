import { useRef } from 'react';

interface InputTextProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label: string;
}

export default function InputText({ ...props }: InputTextProps) {
  const { label, ...rest } = props;
  const id = useRef(`input-${Math.random().toString(36).substring(2, 11)}`);

  return (
    <>
      <label htmlFor={id.current}>
        {label}
      </label>
      <input
        id={id.current}
        type="text"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </>
  );
}
