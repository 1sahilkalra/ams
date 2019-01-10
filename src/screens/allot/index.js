// @flow

import { Colors } from 'constants/colors'
import { Spacings } from 'constants/layout'
import Typography from 'constants/typography'

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import USERS from 'dataSet/user'
import DEVICES from 'dataSet/device'
import Button from 'components/atoms/buttons'
import Textbox from 'components/atoms/textbox'
import FlatButton from 'components/atoms/flat-button'import { storeItem, retrieveItem } from 'lib/storage'

class Allot extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.empInput = undefined
    this.deviceInput = undefined

    this.state = {
      empId: undefined,
      deviceId: undefined,
      errMessage: undefined,
    }
  }

  resetState() {
    this.setState({
      empId: undefined,
      deviceId: undefined,
      errMessage: undefined,
    })
  }

  empIdTextHandler = event => {
    this.setState({
      empId: event.nativeEvent.text.toUpperCase(),
    })
  }

  deviceIdTextHandler = event => {
    this.setState({
      deviceId: event.nativeEvent.text.toUpperCase(),
    })
  }

  generateDeviceInfo = id => {
    if (DEVICES[id]) {
      return DEVICES[id].name
    }
  }

  generateUserInfo = id => {
    if (USERS[id]) {
      return USERS[id].name
    }
  }

  render() {
    const { empId, deviceId, errMessage } = this.state
    console.log(empId, deviceId)
    return (
      <View style={styles.root}>
        <Textbox
          ref={input => {
            this.empInput = input
          }}
          style={styles.textField}
          placeholder={'Enter Device ID'}
          onBlur={this.empIdTextHandler}
          onSubmitEditing={this.empIdTextHandler}
        />

        <Textbox
          ref={input => {
            this.deviceInput = input
          }}
          style={styles.textField}
          placeholder={'Enter Emp ID'}
          onBlur={this.deviceIdTextHandler}
          onSubmitEditing={this.deviceIdTextHandler}
        />

        {empId && deviceId && (
          <View style={styles.infoWrapper}>
            <Text style={styles.info}>
              Should you, {this.generateUserInfo(empId)}, choose to take the
              ownership of the device - {this.generateDeviceInfo(deviceId)}?
            </Text>
          </View>
        )}

        <View style={styles.errWrapper}>
          <Text>{errMessage}</Text>
        </View>

        <View style={styles.successWrapper}>
          <Text>Hurray!!! The device is now assined to you.</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            style={[styles.buttons, styles.secondaryBtn]}
            text={'Reject'}
            width={100}
            onPress={() => this.resetState()}
          />
          <Button
            style={[styles.buttons, styles.primaryBtn]}
            text={'Accept'}
            width={100}
            onPress={async () =>
              await storeItem(deviceId, {
                empId: empId,
                name: this.generateUserInfo(empId),
                timestamp: new Date(),
              })
            }
          />
          <FlatButton
            textStyle={{ color: Colors.blue.ribbon }}
            text={'flat btn'}
            onPress={async () => console.log(await retrieveItem(deviceId))}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 200,
    margin: Spacings.S,
  },
  textField: {
    textTransform: 'uppercase',
  },
  infoWrapper: {},
  errWrapper: {},
  successWrapper: {},
  info: {
    ...Typography.title2,
    marginVertical: Spacings.XL,
  },
  buttonWrapper: {
    flex: 1,
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryBtn: {
    backgroundColor: Colors.blue.ribbon,
  },
  secondaryBtn: {
    backgroundColor: Colors.grey.dark,
  },
})
export default Allot
