import { Asset } from 'expo-asset';
import { ImageSourcePropType } from 'react-native';

export const images: { [key: string]: ImageSourcePropType } = {
  // Change this images
  //   welcome: require('../assets/gifs/Welcome.gif'),
  //   hospital: require('../assets/gifs/Hospital.gif'),
  //   healthTeam: require('../assets/gifs/HealthTeam.gif'),
  //   privacyPolicy: require('../assets/gifs/PrivacyPolicy.gif'),
  //   personalData: require('../assets/gifs/PersonalData.gif'),
  //   mainLogo: require('../assets/images/mainLogo.png'),
};

type VirtualAssetModuleType = number | string;

// preload images
const imageAssets = Object.keys(images).map((key) => {
  return Asset.fromModule(images[key] as VirtualAssetModuleType).downloadAsync();
});

export const loadImages = () => Promise.all(imageAssets);
