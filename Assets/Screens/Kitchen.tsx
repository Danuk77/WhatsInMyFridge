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

import { showAddItemForm, showFilters } from '../../redux/Actions';

// Import redux hooks
import { useSelector, useDispatch } from 'react-redux';

import KitchenItem from './KitchenItem';
import { AddItemFormModal } from '../Functional components/AddItemFormModal';


function Kitchen(): JSX.Element {

  const mode = useSelector((state:any) => state.kitchenMode);
  const dispatch = useDispatch();

  // Get the content to be used
  const internalContent = useSelector((state:any) => state[mode]);

  return (
    <SafeAreaView style={styles.container}>
      <FiltersKitchen/>
      <AddItemFormModal
        onClose={() => dispatch(showAddItemForm())}
        visible={useSelector((state: any) => state.showAddItemForm)}
      />
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
