/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Crashes from 'appcenter-crashes';

export default class App extends React.Component {
  constructor() {
    super();
    this.checkPreviousSessionCrash();
  }

  async checkPreviousSessionCrash() {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      alert('Crash detected - team has been notified.');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Crash" onPress={() => Crashes.generateTestCrash()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
