import { useState } from 'react';

function useSearchField(initialValue = ''): [string, (v: string) => void] {
  const [text, setText] = useState<string>(initialValue);

  const handleChange = (v: string) => {
    setText(v);
  };

  return [text, handleChange];
}

export default useSearchField;
