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

// const foodImages = new Map<String, React.FC>([
//   ['Fridge', Fridge],
//   ['Freezer', Freezer],
//   ['Shelf', Shelf]
// ]);


function Kitchen(): JSX.Element {

  const mode = useSelector((state:any) => state.kitchenMode);
  var RenderComponent;

  if (mode === 'Fridge'){
    RenderComponent = Fridge
  }else if(mode === 'Freezer'){
    RenderComponent = Freezer
  }else {
    RenderComponent = Shelf
  }

  // Get the content to be used
  const internalContent = useSelector((state:any) => state[mode]);

  return (
    <SafeAreaView style={styles.container}>
      <RenderComponent key ={mode} items={internalContent}/>
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
