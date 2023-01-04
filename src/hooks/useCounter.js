import { useState, useCallback } from "react";

const useCounter = (initialValue = 1, stockValue = 99) => {
  const [value, setValue] = useState(initialValue);

  const incrementHandler = useCallback(() => {
    if (value === stockValue) {
      setValue(value);
    } else {
      setValue((prev) => prev + 1);
    }
  },[value,stockValue]);

  const decrementHandler = useCallback(() => {
    if (value <= 1) {
      setValue(1);
    } else {
      setValue((prev) => prev - 1);
    }
  },[value]);

  const inputChangeHandler = useCallback((event) => {
    const inputValue = event.target.value;
    if (inputValue !== ""){
        if (inputValue > stockValue) {
            setValue(parseInt(stockValue));
        } else if (inputValue < 0){
            setValue(1);
        } else {
            setValue(parseInt(inputValue));
        }
    } else {
        setValue(parseInt(inputValue));
    }
  },[stockValue]);

  return { value, incrementHandler, decrementHandler, inputChangeHandler };
};

export default useCounter;
