import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const Pages: React.FC = () => <RouterProvider router={router} />;

export default Pages;
