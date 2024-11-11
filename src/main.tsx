import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { ThemeProvider } from './context/theme-context';
import { router } from './router';

// import { routeTree } from './routeTree.gen';
import './index.css';

export const queryClient = new QueryClient();

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          defaultTheme='light'
          storageKey='vite-ui-theme'>
          <RouterProvider router={router(queryClient)} />
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
