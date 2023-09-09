/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

// Import the custom components
import { FoodItem } from '../Functional components/FoodItem';

function Fridge(): JSX.Element {

  return (
      <ScrollView style={{width:'100%'}}>
        <View style= {{alignItems:'center'}}>
          <FoodItem location="Fridge" name="Apple" type="Fruit" expirationDate={new Date("2023-09-28")}/>
          <FoodItem location="Fridge" name="Chicken" type="Meat" expirationDate={new Date("2023-09-21")}/>
          <FoodItem location="Fridge" name="Carrots" type="Vegetable" expirationDate={new Date("2023-09-17")}/>
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

export default Fridge;
