/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

// Import the fridge, freezer and the shelf
import Fridge from './Fridge';
import Freezer from './Freezer';
import Shelf from './Shelf';

// Import redux hooks
import { useSelector } from 'react-redux';

const foodImages = new Map<String, React.FC>([
  ['Fridge', Fridge],
  ['Freezer', Freezer],
  ['Shelf', Shelf]
]);

function Kitchen(): JSX.Element {

  const mode = useSelector((state:any) => state.kitchenMode);

  const renderComponent = foodImages.get(mode)!;

  return (
    <SafeAreaView style={styles.container}>
      {renderComponent({})} 
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
