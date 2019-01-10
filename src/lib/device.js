import { Dimensions, Platform, PixelRatio } from 'react-native'

export const DeviceSizes = {
  SMALL: 0,
  MEDIUM: 1,
  LARGE: 2,
}

export function isIphoneX() {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    (dimen.height === 812 || dimen.height === 896) &&
    dimen.width === 375
  )
}

const pixelRatio = PixelRatio.get()

const { height, width } = Dimensions.get('window')

const size = () => {
  switch (width) {
    case 320:
      return DeviceSizes.SMALL
    case 375:
      return DeviceSizes.MEDIUM
    case 414:
      return DeviceSizes.LARGE
    default:
      return DeviceSizes.MEDIUM
  }
}

export default {
  size: size(),
  height,
  width,
  isIphoneX: isIphoneX(),
  pixelRatio,
}
