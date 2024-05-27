import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CounterApp from './Couter';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Phetsamay 2CW1</Text>
      <StatusBar style="auto" />
      <CounterApp></CounterApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
