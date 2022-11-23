import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { SkeletonTheme } from 'react-loading-skeleton';
import theme from '../styles/theme';

const queryClient = new QueryClient();

const TestWrapper = ({ children: Component }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <SkeletonTheme baseColor="#1A1A1A" highlightColor="#131313">
        <BrowserRouter>
          <QueryParamProvider adapter={ReactRouter6Adapter}>
            <Routes>
              <Route path="/" element={Component} />
            </Routes>
          </QueryParamProvider>
        </BrowserRouter>
      </SkeletonTheme>
    </ThemeProvider>
  </QueryClientProvider>
);

export default TestWrapper;
