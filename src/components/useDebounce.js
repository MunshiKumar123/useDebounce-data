import React, { useState } from "react";
import { useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouValue, setDebouValue] = useState(value);
  // const [typingTimeout, setTypingTimeout] = useState("");
  // function debounce(func, wait) {
  //   clearTimeout(typingTimeout);
  //   const timeout = setTimeout(() => {
  //     func();
  //   }, wait);
  //   setTypingTimeout(timeout);
  // }
  // return debounce;
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouValue;
};
export default useDebounce;
