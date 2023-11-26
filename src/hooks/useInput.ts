import { useState } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (value: string) => {
    setValue(value);
  };

  return { value, setValue, handleChange };
};

export default useInput;
