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

function Settings(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <FoodItem name="Apple" type="Meat" expirationDate={new Date("2023-09-20")}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor:'black'
  }
})

export default Settings;
