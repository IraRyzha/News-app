import { useState } from "react";
import { IFilters } from "../../interfaces/index.js";

export const useFilters = (initialState: IFilters) => {
  const [filters, setFilters] = useState(initialState);

  const changeFilters = (key: string, value: string | number | null) => {
    setFilters((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return { filters, changeFilters };
};
