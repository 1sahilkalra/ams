import { TextColor } from './colors'

const fontFamilies = {
  medium: 'Avenir-Medium',
  heavy: 'Avenir-Heavy',
  black: 'Avenir-Black',
  book: 'Avenir-Book',
  light: 'Avenir-Light',
}

export default {
  largeTitle: {
    fontSize: 36,
    fontFamily: fontFamilies.black,
    lineHeight: 38,
    color: TextColor.title,
    fontWeight: '900',
  },
  title1: {
    fontSize: 22,
    fontFamily: fontFamilies.heavy,
    lineHeight: 28,
    color: TextColor.title,
  },
  title2: {
    fontSize: 22,
    fontFamily: fontFamilies.black,
    lineHeight: 28,
    color: TextColor.title,
  },
  title3: {
    fontSize: 16,
    fontFamily: fontFamilies.heavy,
    lineHeight: 24,
    color: TextColor.title,
  },
  title4: {
    fontSize: 16,
    fontFamily: fontFamilies.black,
    lineHeight: 24,
    color: TextColor.title,
    fontWeight: '900',
  },
  title5: {
    fontSize: 12,
    fontFamily: fontFamilies.black,
    lineHeight: 18,
    color: TextColor.title,
  },
  bodyM: {
    fontSize: 16,
    fontFamily: fontFamilies.medium,
    lineHeight: 22,
    color: TextColor.body,
  },
  body: {
    fontSize: 16,
    fontFamily: fontFamilies.book,
    lineHeight: 22,
    color: TextColor.body,
  },
  captionM: {
    fontSize: 14,
    fontFamily: fontFamilies.book,
    lineHeight: 16,
    color: TextColor.body,
  },
  caption: {
    fontSize: 12,
    fontFamily: fontFamilies.book,
    lineHeight: 16,
    color: TextColor.body,
  },
  subhead: {
    fontSize: 11,
    fontFamily: fontFamilies.black,
    lineHeight: 20,
    letterSpacing: 1.1,
    color: TextColor.body,
    fontWeight: '900',
  },
  '012345': {
    fontSize: 28,
    fontFamily: fontFamilies.light,
    lineHeight: 32,
    letterSpacing: 2.8,
    color: TextColor.body,
  },
  cta: {
    fontSize: 14,
    fontFamily: fontFamilies.black,
    lineHeight: 18,
    color: TextColor.title,
  },
}
