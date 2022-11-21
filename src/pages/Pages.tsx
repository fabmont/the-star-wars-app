import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Home />
      </QueryParamProvider>
    ),
  },
]);

const Pages: React.FC = () => <RouterProvider router={router} />;

export default Pages;
