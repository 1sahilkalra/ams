// @flow
import Typography from 'constants/typography'

import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

type Props = {
  text: string,
  onPress: () => void,
  style?: ViewStyleProp,
  textStyle?: ViewStyleProp,
}

const FlatButton = (props: Props) => {
  const { text, onPress, style, textStyle } = props
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
    >
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    ...Typography.cta,
  },
})

export default FlatButton
