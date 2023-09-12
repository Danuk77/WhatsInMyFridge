/* eslint-disable */

import React from 'react';
import { foodItem } from '../../config/type';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

// Import the custom components
import { FoodItem } from '../Functional components/FoodItem';
import { useSelector } from 'react-redux';

function KitchenItem(props:any): JSX.Element {
    const filterMap = new Map<String, any>([
        ['Fruit', useSelector((state:any) => state.showFruits)],
        ['Vegetable', useSelector((state:any) => state.showVegetables)],
        ['Meat', useSelector((state:any) => state.showMeats)]
    ]);

    const sortMode = useSelector((state:any) => state.sortMode);

    // Apply the filters chosen by the user
    const appliedFilters = props.items.filter((item:any) => filterMap.get(item.type));

    var sorted = appliedFilters;

    // Apply the sorting
    switch(sortMode){
        case 0:
            //No sorting (the order it was added to the database)
            sorted = appliedFilters;
            break;
        case 1:
            // Earliest expiration date comes first
            sorted.sort((a:foodItem,b:foodItem) => new Date(`${a.expirationDate}`).getTime() - new Date(`${b.expirationDate}`).getTime());
            break;
        case 2:
            // Latest expiration date comes first
            sorted.sort((a:foodItem,b:foodItem) => new Date(`${b.expirationDate}`).getTime() - new Date(`${a.expirationDate}`).getTime());
            break;
    }

    return (
        <ScrollView style={{width:'100%'}}>
        <View style= {{alignItems:'center'}}>

            {sorted.map((item:foodItem, index:number) => (
            <FoodItem key={`${props.location}(${index})`} location={props.location} name={item.name} type={item.type} expirationDate={new Date(`${item.expirationDate}`)} startDate={new Date(`${item.startDate}`)} expirationType={item.expirationType} quantity={item.quantity}/>
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

export default KitchenItem;
