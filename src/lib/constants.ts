// Function to retrieve the value from the environment
const requireEnv = (name: string, value?: string, def?: string) => {
  if (!value && !def) {
    throw new Error(`${name} is required in environment variables, but was not provided`);
  }

  return (value || def) as string;
};

export const REACT_APP_BASE_URL = requireEnv('REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL);

export enum ROUTES {
  MAIN = '/',
  FAVORITE = '/favorites',
}

export const NAV_BAR_URL = [
  {
    name: 'Main',
    to: ROUTES.MAIN,
  },
  {
    name: 'Favorites',
    to: ROUTES.FAVORITE,
  },
];
