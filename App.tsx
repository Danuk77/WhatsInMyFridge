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
import { FoodItem } from './Assets/Functional components/foodItem';
import { bottomBar } from './Assets/Functional components/bottomBar';
import { Tabs } from './Assets/Screens/Tabs';
import { topBar } from './Assets/Functional components/topBar';

function App(): JSX.Element {

  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName='Main'
        screenOptions={{headerShown: false}}>
        <stack.Screen name="Main" component={Tabs}/>
      </stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   {topBar()}
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
  }
})

export default App;
