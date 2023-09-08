/* eslint-disable */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import colors from '../../config/colors';


// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faList, faPlus, faToiletPortable, faSnowflake, faBreadSlice } from "@fortawesome/free-solid-svg-icons"

function Header(): JSX.Element {
// TODO Change which header to see depending on which tab we are on
// TODO Change which header to see depending on which tab we are on
// TODO Change which header to see depending on which tab we are on
// TODO Change which header to see depending on which tab we are on
// TODO Change which header to see depending on which tab we are on
// TODO Change the below state to redux
    const [mode, setMode] = useState<number>(0);

    const modeChange = (newMode:number):void => {
        setMode(newMode);
    }

    return (
    <View style={styles.completeBar}>
        <View style={styles.bar}>
            <Text style={styles.headerText}>WhatsInMyFridge</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faList} size={30} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faPlus} size={30} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>

        {/* Implement the three buttons */}
        <View style={{flexDirection:'row', 
                        justifyContent:'space-around',
                        marginBottom: 15,
                        marginTop: 10
                    }}>
            <View style={mode === 0 ? {backgroundColor:'#FFFFFF', paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5, borderRadius:10} : {paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5}}>
                <TouchableOpacity
                    onPress={() => modeChange(0)}>
                    <FontAwesomeIcon icon={faToiletPortable} size={35} style={{color:colors.fridgy_red}}/>
                </TouchableOpacity>
            </View>

            <View style={mode === 1 ? {backgroundColor:'#FFFFFF', paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5, borderRadius:10} : {paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5}}>
                <TouchableOpacity
                    onPress={() => modeChange(1)}>
                    <FontAwesomeIcon icon={faSnowflake} size={35} style={{color:colors.freezer_blue}}/>
                </TouchableOpacity>
            </View>

            <View style={mode === 2 ? {backgroundColor:'#FFFFFF', paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5, borderRadius:10} : {paddingTop:5, paddingBottom:5, paddingLeft:5, paddingRight:5}}>
                <TouchableOpacity
                    onPress={() => modeChange(2)}>
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
