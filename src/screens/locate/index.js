// @flow

import { Colors } from 'constants/colors'
import Prompt from 'constants/prompt'
import Typography from 'constants/typography'

import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Pulse from 'react-native-pulse'

class Locate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Locate Device',
      active: false,
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          hitSlop={{ top: 100, bottom: 100, left: 100, right: 100 }}
          activeOpacity={1}
          onPress={() => this.setState({ active: true })}
        >
          <Prompt
            title="Locate Device"
            placeholder="AKQA0000"
            defaultValue=""
            titleStyle={{ textAlign: 'center' }}
            visible={this.state.active}
            onCancel={() =>
              this.setState({ active: false, message: 'Locate Device' })
            }
            onSubmit={value =>
              this.setState({
                active: false,
                message: `Locating -${value.toUpperCase()}`,
              })
            }
          />

          <Pulse
            color={Colors.blue.ribbon}
            numPulses={3}
            initialDiameter={150}
            diameter={400}
            speed={20}
            duration={2000}
          />

          <Text style={styles.label}>{this.state.message}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    alignSelf: 'center',
    justifyContent: 'center',
    ...Typography.title1,
    color: Colors.white.absolute,
  },
})
export default Locate
