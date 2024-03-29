import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

import AppProviders from '~/src/services/providers';
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // mon: require('../assets/fonts/Montserrat-Regular.ttf'),
    // 'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    // 'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <AppProviders>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </AppProviders>
  );
}
