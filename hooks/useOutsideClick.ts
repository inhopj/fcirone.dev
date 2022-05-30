import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<Node>();

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, {once: true});

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};