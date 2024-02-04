import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ProviderProps } from '~/src/interfaces/ProviderInterface';
const queryClient = new QueryClient();
const ReactQueryProvider = ({ children }: ProviderProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
