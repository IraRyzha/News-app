import { useEffect, useState } from "react";

interface IFetchFunction<P, T> {
  (params?: P): Promise<T>;
}

interface IUseFetchResult<T> {
  data: T | undefined | null;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(
  fetchFunction: IFetchFunction<P, T>,
  params?: P
): IUseFetchResult<T> => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetchFunction(params);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};
