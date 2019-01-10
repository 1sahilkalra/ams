// @flow

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Navigator from 'navigation'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
