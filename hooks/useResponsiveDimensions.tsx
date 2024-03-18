import { Dimensions } from "react-native";

export const useResponsiveDimensions = () => {
  const { width, height} = Dimensions.get('window');
  return {width, height};
}