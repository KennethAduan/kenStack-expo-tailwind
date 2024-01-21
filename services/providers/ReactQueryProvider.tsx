import { ProviderProps } from 'interfaces/ProviderInterface';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
const ReactQueryProvider = ({ children }: ProviderProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
