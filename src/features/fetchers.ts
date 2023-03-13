import {REACT_APP_BASE_URL} from 'src/lib/constants';

/* eslint-disable import/prefer-default-export */
type FetcherSelector = {
  url: string;
};

// Generic fetcher for the API requests
export const fetcher = async <T>({url}: FetcherSelector): Promise<T> => {
  if (!url) {
    return {} as T;
  }

  const fetchUrl: URL = new URL(`${REACT_APP_BASE_URL}${url}`);

  const response = await fetch(fetchUrl);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const responseBody = await response.json();
  return responseBody as T;
};
