export interface IReturn<T> {
  data: T;
}

export interface IUseQueryReturn {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

export interface ISpellResult<T> {
  results: T;
  count: number;
}
