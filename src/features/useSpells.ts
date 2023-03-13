/* eslint-disable no-return-await */
import {useQuery} from '@tanstack/react-query';
import {Spell} from './api-types';
import API_ENDPOINTS from './endponts';
import {fetcher} from './fetchers';
import QUERY_KEYS from './query-keys';
import {ISpellResult, IUseQueryReturn} from './types';

type UseSpellResult = {
  data: ISpellResult<Spell[]> | undefined;
} & IUseQueryReturn;

// A hook which is called across the entire app to get the data of the whole list of spells.
const useSpells = (): UseSpellResult => {
  const {data, isLoading, isError, error} = useQuery<ISpellResult<Spell[]>>(
    [QUERY_KEYS.SPELLS],
    async () => await fetcher<ISpellResult<Spell[]>>({url: API_ENDPOINTS.ALL_SPELLS}),
  );

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useSpells;
