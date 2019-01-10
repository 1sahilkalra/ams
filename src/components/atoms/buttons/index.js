// @flow
import { Borders, Spacings } from 'constants/layout'
import Typography from 'constants/typography'
import { Colors } from 'constants/colors'

import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'

export type Props = {
  text: string,
  style?: ViewStyleProp,
  textStyle?: ViewStyleProp,
  width?: number | string,
  height?: number | string,
  onPress: () => void,
}


class Buttons extends Component<Props> {
  static defaultProps = {
    height: 50,
    disabled: false,
  }

  render() {
    const {
      text: textLabel,
      style,
      textStyle,
      width,
      height,
      isLoading,
      disabled,
      onPress,
    } = this.props

    const buttonClasses = [styles.rippleContainer]
    const textClasses = [styles.text, textStyle, styles.blackText]

    let text = textLabel
    if (isLoading) {
      text = ''
    }

    return (
      <View style={[styles.mainContainer, { width, height }, style]}>
          <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
          >
          <Text style={textClasses}>{text}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    borderRadius: Borders.RADIUS.BUTTON,
  },
  gradientContainer: {
    borderRadius: Borders.RADIUS.BUTTON,
  },
  text: {
    ...Typography.title3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    padding: Spacings.S,
    color: Colors.white.absolute,
    lineHeight:0
  },
})

export default Buttons
