import { useState } from "react";

export default function useLocalStorage(initialValue, key = "localData") {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    const finalItem = item ? JSON.parse(item) : initialValue;
    localStorage.setItem(key, JSON.stringify(finalItem));
    return finalItem;
  });

  const setLocalStorageHandler = (newValue) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setLocalStorageHandler];
}
