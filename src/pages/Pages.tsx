import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import Home from './Home';

const Pages: React.FC = () => (
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryParamProvider>
  </BrowserRouter>
);

export default Pages;
