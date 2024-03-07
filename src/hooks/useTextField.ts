import { useState, ChangeEventHandler } from 'react';

function useTextField(
  initialValue = '',
): [string, ChangeEventHandler<HTMLInputElement>] {
  const [text, setText] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return [text, handleChange];
}

export default useTextField;
