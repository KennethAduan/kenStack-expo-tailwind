import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../states/redux/store';

import { ProviderProps } from '~/src/interfaces/ProviderInterface';
const ReduxProvider = ({ children }: ProviderProps) => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};

export default ReduxProvider;
