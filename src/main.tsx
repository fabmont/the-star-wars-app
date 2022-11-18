import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import './index.css';
import theme from './styles/theme';
import { PeopleProvider } from './contexts/PeopleContext/PeopleContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <PeopleProvider>
          <App />
        </PeopleProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
