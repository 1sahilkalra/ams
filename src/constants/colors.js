// @flow

export const Colors = {
  black: {
    default: '#253B56',
    absolute: '#000000',
  },
  grey: {
    default: '#6E6E6E',
    light: '#E6E6E6',
    text: '#8E8E93',
    dark: '#979797',
  },
  white: {
    default: '#F7F7F7',
    absolute: '#FFFFFF',
  },
  blue: {
    malibu: '#4DDBFF',
    dodger: '#23BBF9',
    ribbon: '#1E87FF',
    azure: '#0E84FF',
    polo: '#78899E',
  },
  red: {
    dark: '#FF301C',
  },
}

export const BackgroundColor = {
  default: Colors.white.default,
  backdrop: 'rgba(0,0,0,0.5)',
}

export const TextColor = {
  title: Colors.black.default,
  body: Colors.black.default,
  link: Colors.blue.azure,
}

export const Gradients = {
  transparentToDark: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)'],
  darkToTransparent: ['rgba(0,0,0,0.4)', 'rgba(0,0,0,0)'],
  whiteToTransparent: ['rgba(255,255,255,1)', 'rgba(255,255,255,0)'],
  transparentToWhite: ['rgba(247, 247, 247,0)', 'rgba(rgba(247, 247, 247, 1))'],
  blue: {
    light: ['#23BBF9', '#4DDBFF'],
    default: ['#3269FF', '#00B5FF'],
    dark: ['#4129A3', '#1EADFF'],
    veryDark: ['#4129A3', '#000935'],
    turquoise: ['#27AF95', '#84FFF9'],
  },
  purple: {
    default: ['#09154C', '#9D50AE'],
    pinkDark: ['#44008C', '#FF464D'],
    dark: ['#915DB5', '#E06092'],
  },
  orange: {
    pink: ['#FF7D00', '#FF4D54'],
    brown: ['#D95E39', '#FF9E66'],
  },
  gold: {
    default: ['#FF9E66', '#D95E39'],
  },
  red: {
    default: ['#C61A20', '#FF301C'],
  },
  brown: {
    default: ['#7E322C', '#E59743'],
  },
  green: {
    default: ['#50B61E', '#C1F86D'],
  },
  pink: {
    default: ['#FF30A7', '#FF8BB8'],
  },
}

export default Colors
