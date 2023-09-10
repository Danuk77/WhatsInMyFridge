/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Modal
} from 'react-native';

// Filters
import FiltersKitchen from './FiltersKitchen';

import { showFilters } from '../../redux/Actions';

// Import redux hooks
import { useSelector, useDispatch } from 'react-redux';

import KitchenItem from './KitchenItem';


function Kitchen(): JSX.Element {

  const mode = useSelector((state:any) => state.kitchenMode);

  // Get the content to be used
  const internalContent = useSelector((state:any) => state[mode]);

  return (
    <SafeAreaView style={styles.container}>
      <FiltersKitchen/>
      <KitchenItem items={internalContent} location={mode}/>
      {/* <RenderComponent key ={mode} items={internalContent}/> */}
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
