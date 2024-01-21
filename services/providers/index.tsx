import { NetworkInfo } from 'hooks/CheckInternetConnection';
import { ProviderProps } from 'interfaces/ProviderInterface';
import React from 'react';
import { AlertNotificationRoot, ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ReactQueryProvider from './ReactQueryProvider';
import ReduxProvider from './ReduxProvider';

const AppProviders = ({ children }: ProviderProps) => {
  const isNetworkUnavailable = NetworkInfo();

  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <AlertNotificationRoot>
          <>
            {isNetworkUnavailable &&
              Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'No Internet Connection',
                autoClose: false,
                textBody: 'Please check your internet connection and try again.',
              })}
            <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>
          </>
        </AlertNotificationRoot>
      </ReduxProvider>
    </ReactQueryProvider>
  );
};

export default AppProviders;
