/* eslint-disable import/prefer-default-export */
import React from 'react';

import {ROUTES} from '../lib/constants';
import FavoritePage from './favorite/favorite';
import MainEntry from './main/main';

type RouteType = {
  path: string;
  element: React.ReactNode;
  exact: boolean;
};

export const publicRoutes: RouteType[] = [
  {exact: true, path: ROUTES.MAIN, element: <MainEntry />},
  {exact: true, path: ROUTES.FAVORITE, element: <FavoritePage />},
];
