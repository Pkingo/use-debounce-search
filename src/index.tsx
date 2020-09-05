import React, { useState } from 'react';
import { useDebounceSearch } from './useDebounceSearch';

const Test: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isSearching } = useDebounceSearch(
    searchTerm,
    () =>
      new Promise((resolve) => {
        resolve('ok');
      }),
    500
  );
  return (
    <div>
      <p>Status: {isSearching ? 'Loading...' : 'Done'}</p>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
    </div>
  );
};
