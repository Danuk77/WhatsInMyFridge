/* eslint-disable */

import { foodItem } from '../../config/type';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

// Import the custom components
import { FoodItem } from '../Functional components/FoodItem';

function Shelf(props:{items:foodItem[]}): JSX.Element {

  return (
      <ScrollView style={{width:'100%'}}>
        <View style= {{alignItems:'center'}}>
          
          {props.items.map((item:foodItem, index:number) => (
            <FoodItem key={`Freezer(${index})`} location="Freezer" name={item.name} type={item.type} expirationDate={new Date("2023-09-28")}/>
          ))}

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
