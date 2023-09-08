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

function Shelf(): JSX.Element {

  return (
      <ScrollView style={{width:'100%'}}>
        <View style= {{alignItems:'center'}}>
          <FoodItem location="Shelf" name="Apple" type="Fruit" expirationDate={new Date("2023-09-28")}/>
          <FoodItem location="Shelf" name="Chicken" type="Meat" expirationDate={new Date("2023-09-21")}/>
          <FoodItem location="Shelf" name="Carrots" type="Vegetable" expirationDate={new Date("2023-09-17")}/>
          <FoodItem location="Shelf" name="Leeks" type="Vegetable" expirationDate={new Date("2023-10-20")}/>
          <FoodItem location="Shelf" name="Bananas" type="Fruit" expirationDate={new Date("2023-10-01")}/>
          <FoodItem location="Shelf" name="Oranges" type="Fruit" expirationDate={new Date("2023-10-02")}/>
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

export default Shelf;
