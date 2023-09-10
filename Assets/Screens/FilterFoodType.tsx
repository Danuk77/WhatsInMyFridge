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

import { changeFilter } from '../../redux/Actions';

// Import redux hooks
import { useDispatch } from 'react-redux';

type foodType = {
    type: String,
    shown: boolean
}

function FilterFoodType(props:foodType): JSX.Element {

  const getShade = () => {
    switch(props.type){
      case 'Fruit':
        return props.shown === true ? '#FE5454' : '#B23C3C';
      case 'Vegetable':
        return props.shown === true ? '#00FF38' : '#007D1C';
      case 'Meat':
        return props.shown === true ? '#FF7F63' : '#AF5A48';
    }
  }

  const iconColor = getShade();
  const aroundColor = props.shown === true ? 'white' : '#8A8A8A';
  const dispatch = useDispatch();

  return (
        <TouchableOpacity onPress={() => dispatch(changeFilter(props.type))} style = {[styles.container, {backgroundColor:aroundColor}]}>
            <FontAwesomeIcon icon={props.type === 'Fruit' ? faAppleWhole : props.type === 'Vegetable' ? faCarrot : faDrumstickBite} size={20} 
                style={{color:iconColor}} />
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'25%',
        height: '70%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:10,
    },
})

export default FilterFoodType;
