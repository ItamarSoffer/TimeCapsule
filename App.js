import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Progresses from './progresses';
import {Bar} from "react-native-progress";

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>What the hell</Text>
        <Text> Progress bar from Progress.Bar</Text>
        <Bar progress={0.2} width={200} />
        <Progresses/>
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
