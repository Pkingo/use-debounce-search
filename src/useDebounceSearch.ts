import { useState, useEffect } from 'react';

export const useDebounceSearch = (
  searchTerm: string,
  searchFunction: (searchTerm: string) => Promise<any>,
  delay = 500
) => {
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedValue, setDebouncedValue] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, delay);
    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    setIsSearching(true);
    searchFunction(debouncedValue).finally(() => setIsSearching(false));
  }, [debouncedValue]);
  return {
    isSearching,
  };
};
