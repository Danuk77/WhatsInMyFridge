/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// Filters
import FiltersKitchen from './FiltersKitchen';

import { hideItemDropdown, setShowEditItemForm, showAddItemForm, showAddItemOptionsList, showFilters } from '../../redux/Actions';

// Import redux hooks
import { useSelector, useDispatch } from 'react-redux';

import KitchenItem from './KitchenItem';
import { AddItemFormModal } from '../functionalComponents/AddItemFormModal';
import { NewItemMenu } from '../functionalComponents/NewItemMenu';
import ItemOptions from '../functionalComponents/ItemOptions';
import { EditItemFormModal } from '../functionalComponents/EditItemFormModal';


function Kitchen(): JSX.Element {

  const mode = useSelector((state:any) => state.kitchenMode);
  const dispatch = useDispatch();

  // Get the content to be used
  const internalContent = useSelector((state:any) => state[mode]);

  return (
    <SafeAreaView style={styles.container}>
      <NewItemMenu
        onClose={() => dispatch(showAddItemOptionsList())}
        visible={useSelector((state: any) => state.showAddItemOptions)}/>
      <FiltersKitchen/>
      <AddItemFormModal
        onClose={() => dispatch(showAddItemForm())}
        visible={useSelector((state: any) => state.showAddItemForm)}
      />
      <EditItemFormModal
        onClose={() => dispatch(setShowEditItemForm(false))}
        visible={useSelector((state: any) => state.showEditItemForm)}
        id={useSelector((state: any) => state.itemDropdownSettings.itemID)}
        storageLocation={useSelector((state: any) => state.itemDropdownSettings.itemLocation)}
      />
      <ItemOptions
        onClose={() => dispatch(hideItemDropdown())}
        visible={useSelector((state:any) => state.itemDropdownSettings.visible)}
        style={useSelector((state: any) => state.itemDropdownSettings.position)}
        id={useSelector((state: any) => state.itemDropdownSettings.itemID)}
        storageLocation={useSelector((state: any) => state.itemDropdownSettings.itemLocation)}
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
