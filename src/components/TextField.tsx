import { useRef } from 'react';

type TextFieldProps = {
    text: string,
    setText: (text: string) => void
}

export default function TextField({ text, setText } : TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  return (
    <div>
      <label htmlFor={id.current}>검색</label>
      <input
        id={id.current}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
