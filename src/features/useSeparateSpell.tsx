/* eslint-disable no-return-await */
import {useQuery} from '@tanstack/react-query';
import {SeparateSpell} from './api-types';
import {fetcher} from './fetchers';
import QUERY_KEYS from './query-keys';
import {IUseQueryReturn} from './types';

type UseSeparateSpellResult = {
  data: SeparateSpell | undefined;
} & IUseQueryReturn;

interface IUseSeparateSpellProps {
  selectedSpell: {
    url: string;
  };
}
// A hook which is called across the entire app to get the data for a single Spell
const useSeparateSpell = ({selectedSpell}: IUseSeparateSpellProps): UseSeparateSpellResult => {
  const {data, isLoading, error, isError} = useQuery<SeparateSpell>(
    [QUERY_KEYS.SPELL(selectedSpell?.url)],
    async () => await fetcher<SeparateSpell>({url: selectedSpell?.url}),
  );

  return {
    data,
    isError,
    isLoading,
    error,
  };
};

export default useSeparateSpell;
