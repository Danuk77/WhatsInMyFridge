/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,

} from 'react-native';

// Import the custom components
import { foodItem } from './Assets/Functional components/foodItem';
import { bottomBar } from './Assets/Functional components/bottomBar';
import { topBar } from './Assets/Functional components/topBar';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      {topBar()}
      {foodItem()}
      {bottomBar()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf:'center',
    justifyContent: 'center',
    width:"100%"
  }
})

export default App;
