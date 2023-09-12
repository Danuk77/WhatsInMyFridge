/* eslint-disable */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable
} from 'react-native';

import colors from '../../config/colors';

// Import redux hooks
import { useSelector, useDispatch } from 'react-redux';
import { changeKitchenMode, showAddItemForm, showFilters } from '../../redux/Actions';



// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faList, faPlus, faToiletPortable, faSnowflake, faBreadSlice } from "@fortawesome/free-solid-svg-icons"
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



function Header(): JSX.Element {
// TODO Change which header to see depending on which tab we are on
// TODO Change which header to see depending on which tab we are on
// TODO Change which header to see depending on which tab we are on
// TODO Change which header to see depending on which tab we are on
// TODO Change which header to see depending on which tab we are on
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const dispatch = useDispatch();

    return (
    <View style={styles.completeBar}>
        <View style={styles.bar}>
            {/* todo remove debug screen */}
            <Pressable style={{height:60}} onLongPress={() => navigation.navigate('Debug')}>
                <Text style={styles.headerText}>WhatsInMyFridge</Text>
            </Pressable>
            
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => dispatch(showFilters())}>
                    <FontAwesomeIcon icon={faList} size={30} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => dispatch(showAddItemForm())}>
                    <FontAwesomeIcon icon={faPlus} size={30} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>

        {/* Implement the three buttons */}
        <View style={{flexDirection:'row', 
                        justifyContent:'space-around',
                        marginBottom: 15,
                        marginTop: 10
                    }}>
            <View style={useSelector((state:any) => state.kitchenMode) === 'Fridge' ? {backgroundColor:'#FFFFFF', paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5, borderRadius:10} : {paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5}}>
                <TouchableOpacity
                    onPress={() => dispatch(changeKitchenMode('Fridge'))}>
                    <FontAwesomeIcon icon={faToiletPortable} size={35} style={{color:colors.fridgy_red}}/>
                </TouchableOpacity>
            </View>

            <View style={useSelector((state:any) => state.kitchenMode) === 'Freezer' ? {backgroundColor:'#FFFFFF', paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5, borderRadius:10} : {paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5}}>
                <TouchableOpacity
                    onPress={() => dispatch(changeKitchenMode('Freezer'))}>
                    <FontAwesomeIcon icon={faSnowflake} size={35} style={{color:colors.freezer_blue}}/>
                </TouchableOpacity>
            </View>

            <View style={useSelector((state:any) => state.kitchenMode) === 'Shelf' ? {backgroundColor:'#FFFFFF', paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5, borderRadius:10} : {paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5}}>
                <TouchableOpacity
                    onPress={() => dispatch(changeKitchenMode('Shelf'))}>
                    <FontAwesomeIcon icon={faBreadSlice} size={35} style={{color:colors.toasty_brown}}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        width: "100%",
        flexDirection: "row",
    },
    headerText: {
        fontFamily:"LilitaOne-Regular", // doesn't work
        // also you might need to run "npx react-native-asset"
        fontSize:32,
        color:colors.white,
        paddingLeft:10,
        marginTop:10,
        marginBottom:10,
        flex:5
        
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
    },
    icon: {
        color: colors.white,
    },
    completeBar:{
        backgroundColor: colors.dark_blue,
        width:'100%'
    }
})

export default Header;
