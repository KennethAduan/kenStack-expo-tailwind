import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

const useIsFirstLaunch = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('VitalVanguardLaunch').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('VitalVanguardLaunch', 'true');
        setIsFirstLaunch(true);
        console.log('First Launch');
      } else {
        setIsFirstLaunch(false);
        console.log('Not First Launch');
      }
    });
  }, []);

  return isFirstLaunch;
};

export const NavigateUser = () => {
  const isFirstLaunch = useIsFirstLaunch();
  const router = useRouter();

  useEffect(() => {
    if (isFirstLaunch === null) {
      // Wait for isFirstLaunch to be set
      return;
    }

    if (isFirstLaunch) {
      router.push('/onboarding/');
    }
  }, [isFirstLaunch]);
};
