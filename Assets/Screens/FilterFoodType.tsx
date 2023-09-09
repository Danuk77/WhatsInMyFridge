/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAppleWhole, faDrumstickBite, faCarrot } from '@fortawesome/free-solid-svg-icons';

// Import redux hooks
import { useSelector, useDispatch } from 'react-redux';

type foodType = {
    type: String
}

function FilterFoodType(props:foodType): JSX.Element {

  return (
        <TouchableOpacity style = {styles.container}>
            <FontAwesomeIcon icon={props.type === 'Fruit' ? faAppleWhole : props.type === 'Vegetable' ? faCarrot : faDrumstickBite} size={20} 
                style={props.type === 'Fruit' ? {color:'#FE5454'} : props.type === 'Vegetable' ? {color:'#00FF38'} : {color:'#FF7F63'}} />
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'25%',
        height: '55%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:10,
    }
})

export default FilterFoodType;
