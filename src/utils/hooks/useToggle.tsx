import { useState } from 'react';

export const useToggle = (initValue: boolean = true) => {
  const [isVisible, setIsVisible] = useState(initValue);

  const toggle = () => {
    setIsVisible((prevState) => !prevState);
  };

  const open = () => {
    setIsVisible(() => true);
  };

  const close = () => {
    setIsVisible(() => false);
  };

  return { isVisible, open, toggle, close };
};
