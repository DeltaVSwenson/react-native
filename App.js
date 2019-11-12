import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Light from './components/light'

export default function App() {
  return (
    <View style={styles.container}>
      <Light/>
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
