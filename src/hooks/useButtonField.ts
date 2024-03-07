import { useState } from 'react';

function useButtonField(initialValue: string): [string, (v: string) => void] {
  const [buttonName, setButtonName] = useState<string>(initialValue);

  const handleClick = (v: string) => {
    setButtonName(v);
  };

  return [buttonName, handleClick];
}

export default useButtonField;
