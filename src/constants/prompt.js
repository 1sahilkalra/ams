import React, { Component } from 'react'
import {
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native'

import Textbox from 'components/atoms/textbox'
import { Colors } from 'constants/colors'
import Typography from 'constants/typography'

export default class Prompt extends Component {
  static defaultProps = {
    visible: false,
    defaultValue: '',
    cancelText: 'Cancel',
    submitText: 'OK',
    borderColor: Colors.grey.light,
    promptStyle: {},
    titleStyle: {},
    buttonStyle: {},
    buttonTextStyle: {},
    submitButtonStyle: {},
    submitButtonTextStyle: {},
    cancelButtonStyle: {},
    cancelButtonTextStyle: {},
    inputStyle: {},
    onChangeText: () => {},
  }

  state = {
    value: '',
    visible: false,
    errorMessage: false,
  }

  componentDidMount() {
    this.setState({ value: this.props.defaultValue })
  }

  componentWillReceiveProps(nextProps) {
    const { visible, defaultValue } = nextProps
    this.setState({ visible, value: defaultValue })
  }

  onChangeText = value => {
    this.setState({ value, errorMessage: false })
    this.props.onChangeText(value)
  }

  onSubmitPress = () => {
    const { value } = this.state
    if (value !== '') {
      this.props.onSubmit(value)
    } else {
      this.setState({ errorMessage: true })
    }
  }

  onCancelPress = () => {
    this.props.onCancel()
  }

  close = () => {
    this.setState({ visible: false })
  }

  openModal = () => {
    const {
      title,
      placeholder,
      defaultValue,
      cancelText,
      submitText,
      borderColor,
      promptStyle,
      titleStyle,
      buttonStyle,
      buttonTextStyle,
      submitButtonStyle,
      submitButtonTextStyle,
      cancelButtonStyle,
      cancelButtonTextStyle,
      inputStyle,
    } = this.props
    return (
      <View style={styles.dialog} key="prompt">
        <View style={styles.dialogOverlay} />
        <View style={[styles.dialogContent, { borderColor }, promptStyle]}>
          <View style={[styles.dialogTitle, { borderColor }]}>
            <Text style={[styles.dialogTitleText, titleStyle]}>{title}</Text>
          </View>

          <View style={styles.dialogBody}>
            <Textbox
              style={[styles.dialogInput, inputStyle]}
              defaultValue={defaultValue}
              onChangeText={this.onChangeText}
              placeholder={placeholder}
              autoFocus={true}
              underlineColorAndroid="white"
              {...this.props.textInputProps}
            />
          </View>
          {this.state.errorMessage && (
            <View>
              <Text style={[styles.errorBlock]}>
                The Field should not be blank.
              </Text>
            </View>
          )}
          <View style={[styles.dialogFooter, { borderColor }]}>
            <TouchableWithoutFeedback onPress={this.onCancelPress}>
              <View
                style={[styles.dialogAction, buttonStyle, cancelButtonStyle]}
              >
                <Text
                  style={[
                    styles.dialogActionText,
                    buttonTextStyle,
                    cancelButtonTextStyle,
                  ]}
                >
                  {cancelText}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.onSubmitPress}>
              <View
                style={[styles.dialogAction, buttonStyle, submitButtonStyle]}
              >
                <Text
                  style={[
                    styles.dialogActionText,
                    buttonTextStyle,
                    submitButtonTextStyle,
                  ]}
                >
                  {submitText}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Modal
        onRequestClose={() => this.close()}
        transparent={true}
        visible={this.props.visible}
      >
        {this.openModal()}
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  dialog: {
    flex: 1,
    alignItems: 'center',
  },
  dialogOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  dialogContent: {
    elevation: 5,
    marginTop: 320,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    overflow: 'hidden',
  },
  dialogTitle: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dialogTitleText: {
    ...Typography.title4,
  },
  dialogBody: {
    paddingHorizontal: 10,
  },
  dialogInput: {
    height: 50,
    ...Typography.title3,
    textAlign: 'center',
  },
  dialogFooter: {
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  dialogAction: {
    flex: 1,
    padding: 15,
  },
  dialogActionText: {
    ...Typography.title3,
    textAlign: 'center',
    color: Colors.blue.ribbon,
  },
  errorBlock: {
    color: Colors.red.dark,
    textAlign: 'center',
  },
})
