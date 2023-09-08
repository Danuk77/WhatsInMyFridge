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

function Kitchen(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:'100%'}}>
        <View style= {{alignItems:'center'}}>
          <FoodItem name="Apple" type="Fruit" expirationDate={new Date("2023-09-28")}/>
          <FoodItem name="Chicken" type="Meat" expirationDate={new Date("2023-09-21")}/>
          <FoodItem name="Carrots" type="Vegetable" expirationDate={new Date("2023-09-17")}/>
          <FoodItem name="Leeks" type="Vegetable" expirationDate={new Date("2023-10-20")}/>
          <FoodItem name="Bananas" type="Fruit" expirationDate={new Date("2023-10-01")}/>
          <FoodItem name="Oranges" type="Fruit" expirationDate={new Date("2023-10-02")}/>
          <FoodItem name="Beef" type="Meat" expirationDate={new Date("2023-09-26")}/>
          <FoodItem name="Pork" type="Meat" expirationDate={new Date("2023-09-25")}/>
          <FoodItem name="Grapes" type="Fruit" expirationDate={new Date("2023-09-22")}/>
          <FoodItem name="Onions" type="Vegetable" expirationDate={new Date("2023-09-21")}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    alignItems:'center'
  },
})

export default Kitchen;
