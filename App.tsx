/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,

} from 'react-native';


// Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import the custom components
import { FoodItem } from './Assets/Functional components/FoodItem';
import { bottomBar } from './Assets/Functional components/bottomBar';
import { Tabs } from './Assets/Screens/Tabs';
import { topBar } from './Assets/Functional components/topBar';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.foodItemTest}>
    //     <FoodItem name="Apple" type="Meat" expirationDate={new Date("2023-09-20")}/>
    //   </View>
    //   {/* {bottomBar()} */}
    // </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   {topBar()}
    //   {foodItem()}
    //   {bottomBar()}
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor:'black'
  },
  foodItemTest: {
    width:'80%'
  }
})

export default App;
