/* eslint-disable */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Modal,
  TouchableOpacity,
  Text,
  TouchableHighlight
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { showFilters } from '../../redux/Actions';

// Import redux hooks
import { useSelector, useDispatch } from 'react-redux';

import FilterFoodType from './FilterFoodType';


function FiltersKitchen(): JSX.Element {

  const dispatch = useDispatch();
  const mode = useSelector((state:any) => state.kitchenMode);



  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={useSelector((state:any) => state.showFilters)}
    >
        <View style={styles.container}>
            <View style={styles.outerBox}>

                <View style={{flex:1, flexDirection:'row', width: '100%'}}>
                    <Text style={styles.title}>Filters</Text>
                    <View style={styles.close}>
                        <TouchableOpacity onPress={() => {dispatch(showFilters())}}>
                            <FontAwesomeIcon icon={faXmark} size={32} style={{color:'white'}} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{flex:1, flexDirection:'row', width: '100%'}}>
                    <Text style={[styles.title, {fontSize: 18}]}>Food Type:</Text>
                    <View style={{flex:2, flexDirection:'row', justifyContent:'space-evenly', alignItems: 'center', paddingRight: '10%'}}>
                        <FilterFoodType type="Fruit"/>
                        <FilterFoodType type="Vegetable"/>
                        <FilterFoodType type="Meat"/>
                    </View>
                </View>

                <View style={{flex:1, flexDirection:'row', width: '100%'}}>
                    <Text style={[styles.title, {fontSize: 18}]}>Sort Items:</Text>
                    <View style={{flex:2, flexDirection:'row', justifyContent:'center', alignItems: 'center', paddingRight: '10%'}}>
                        <TouchableOpacity style={{width:'80%',backgroundColor:'white', borderRadius:10, alignItems:'center', justifyContent:'center', padding:'1%'}}>
                            <Text> 1 </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flex:1, flexDirection:'row', width: '100%'}}>
                    <View style={styles.buttonBackground}>
                        <TouchableOpacity style={styles.applyButton}
                                            onPress={() => {dispatch(showFilters())}}>
                            <Text style={{fontSize: 16, color:'#616161'}}>
                                Apply
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    outerBox: {
      width: '100%',
      height: '40%',
      backgroundColor: '#2E81FF',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    applyButton:{
      backgroundColor:'white',
      borderRadius: 10,
      padding:10
    },
    buttonBackground:{
      width:'100%',
      height: '100%', 
      justifyContent:'center', 
      alignItems:'center',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    title:{
        flex:1, 
        fontSize:32, 
        color:'white', 
        alignSelf:'center', 
        paddingLeft: '10%'
    },
    close:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'flex-end', 
        paddingRight:'10%'
    }

})

export default FiltersKitchen;
