// Query keys for the API Endpoints
const QUERY_KEYS = {
  SPELLS: 'spells',
  SPELL: (id: string) => ['spell', id],
};

export default QUERY_KEYS;
