/* eslint-disable */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

// React redux for global state management
import { Provider } from 'react-redux';
import store from './redux/Store';

// Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import the custom components
import { Tabs } from './Assets/Screens/Tabs';

function App(): JSX.Element {

  const stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName='Main'
          screenOptions={{headerShown: false}}>
          <stack.Screen name="Main" component={Tabs}/>
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
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
