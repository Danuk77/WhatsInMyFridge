/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,

} from 'react-native';

// Import the custom components
import { foodItem } from './Assets/Functional components/foodItem';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      {foodItem()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf:'center',
    justifyContent: 'center'
  }
})

export default App;
