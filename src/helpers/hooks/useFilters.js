import { useState } from "react";

export const useFilters = (initialState) => {
  const [filters, setFilters] = useState(initialState);

  const changeFilters = (key, value) => {
    setFilters((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return { filters, changeFilters };
};
