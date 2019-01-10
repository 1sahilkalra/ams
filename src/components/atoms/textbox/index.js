// @flow

import { Colors } from 'constants/colors'
import {Spacings} from 'constants/layout'
import Typography from 'constants/typography'

import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import type { ReturnKeyType } from 'react-native/Libraries/Components/TextInput/TextInput'

type Props = {
  placeholder: string,
  placeholderTextColor?: string,
  value?: string,
  selectionColor?: string,
  style?: ViewStyleProp,
  returnKeyType?: ReturnKeyType,
  numberOfLines?: number,
  onChangeText?: (text: string) => void,
  onSubmitEditing?: (event: Event) => void,
  onFocus?: (event: Event) => void,
  onBlur?: (event: Event) => void,
  autoFocus: boolean,
  autoCorrect: string,
}

class Textbox extends Component<Props> {
  static defaultProps = {
    returnKeyType: 'done',
    numberOfLines: 1,
    placeholderTextColor: Colors.grey.text,
    autoFocus: false,
    autoCorrect: false,
  }
  render() {
    const {
      placeholder,
      placeholderTextColor,
      style,
      ref,
      selectionColor,
      returnKeyType,
      onChangeText,
      onSubmitEditing,
      numberOfLines,
      value,
      onFocus,
      onBlur,
      autoFocus,
      autoCorrect,
    } = this.props
    return (
      <TextInput
        style={[styles.textField, style]}
        ref={ref}
        placeholder={placeholder}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        value={value}
        numberOfLines={numberOfLines}
        returnKeyType={returnKeyType}
        autoFocus={autoFocus}
        autoCorrect={autoCorrect}
      />
    )
  }
}

const styles = StyleSheet.create({
  textField: {
     ...Typography.title1,
    padding: Spacings.S,
    borderBottomWidth:1,
    borderColor: Colors.grey.light
  },
})

export default Textbox
