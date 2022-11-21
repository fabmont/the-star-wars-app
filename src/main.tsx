import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SkeletonTheme } from 'react-loading-skeleton';

import App from './App';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import theme from './styles/theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SkeletonTheme baseColor="#1A1A1A" highlightColor="#131313">
          <App />
        </SkeletonTheme>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
