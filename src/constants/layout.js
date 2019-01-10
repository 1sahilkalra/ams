// @flow

export const Spacings = {
  XXS: 4,
  XS: 8,
  S: 16,
  M: 24,
  L: 32,
  XL: 40,
  XXL: 48,
}

export const Borders = {
  RADIUS: {
    BUTTON: 10,
    CARD: 20,
    LIST: 15,
  },
  WIDTH: {
    THINNER: 2,
    THIN: 3,
    NORMAL: 4,
    THICK: 8,
  },
}

export const Shadows = {
  DEFAULT: {
    OFFSET: { width: 0, height: 4 },
    RADIUS: 14,
    COLOR: 'black',
    OPACITY: 0.1,
    ELEVATION: 14,
  },
  ICON: {
    OFFSET: { width: 0, height: -11 },
    RADIUS: 13,
    COLOR: 'black',
    OPACITY: 0.16,
    ELEVATION: 15,
  },
  MARKER: {
    COLOR: 'black',
    RADIUS: 10,
    OFFSET: { width: 0, height: -5 },
    OPACITY: 0.2,
    ELEVATION: 7,
  },
  CLUSTER_MARKER: {
    COLOR: 'black',
    OFFSET: { width: 0, height: 2 },
    RADIUS: 4,
    OPACITY: 0.5,
    ELEVATION: 5,
  },
  FLOATING_BUTTON: {
    COLOR: 'black',
    OFFSET: { width: 0, height: 6 },
    RADIUS: 10,
    OPACITY: 0.2,
    ELEVATION: 7,
  },
}

export const ImageRatios = {
  wide: '16:9',
  square: '1:1',
}

export const Header = {
  HEADER_BAR_HEIGHT: 65,
  HEADER_BAR_BUTTON_HITSLOP: { top: 20, right: 20, bottom: 20, left: 20 },
}

export const TabBar = {
  TAB_BAR_HEIGHT: 48,
  TAB_BAR_SHADOW_HEIGHT: 32,
  TAB_BAR_LARGE_ICON_CONTAINER: 80,
}

export const Constants = {
  MARGIN: Spacings.XL, // Use it for outer margins
  GUTTER: Spacings.M,
  BASE_DEVICE_WIDTH: 320,
}
