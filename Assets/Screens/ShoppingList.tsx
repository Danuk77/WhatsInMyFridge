/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,

} from 'react-native';


// Import the custom components
import { FoodItem } from '../Functional components/FoodItem';

function ShoopingList(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Shopping list</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
  }
})

export default ShoopingList;
