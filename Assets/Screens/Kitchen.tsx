/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Modal
} from 'react-native';

// Import the fridge, freezer and the shelf
import Fridge from './Fridge';
import Freezer from './Freezer';
import Shelf from './Shelf';

// Filters
import FiltersKitchen from './FiltersKitchen';

import { showFilters } from '../../redux/Actions';

// Import redux hooks
import { useSelector, useDispatch } from 'react-redux';


function Kitchen(): JSX.Element {

  const dispatch = useDispatch();
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
      <FiltersKitchen/>
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
