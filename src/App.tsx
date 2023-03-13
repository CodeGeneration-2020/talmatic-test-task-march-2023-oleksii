import React from 'react';
import './App.css';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {publicRoutes} from './pages/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const Router = createBrowserRouter(publicRoutes);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />

    <RouterProvider router={Router} />
  </QueryClientProvider>
);
export default App;
