/* eslint-disable */

import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

// Import the custom components
import { FoodItem } from '../Functional components/FoodItem';

function Freezer(): JSX.Element {

  return (
      <ScrollView style={{width:'100%'}}>
        <View style= {{alignItems:'center'}}>
          <FoodItem location="Freezer" name="Apple" type="Fruit" expirationDate={new Date("2023-09-28")}/>
          <FoodItem location="Freezer" name="Chicken" type="Meat" expirationDate={new Date("2023-09-21")}/>
          <FoodItem location="Freezer" name="Carrots" type="Vegetable" expirationDate={new Date("2023-09-17")}/>
          <FoodItem location="Freezer" name="Leeks" type="Vegetable" expirationDate={new Date("2023-10-20")}/>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    alignItems:'center'
  },
})

export default Freezer;
