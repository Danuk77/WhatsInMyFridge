/* eslint-disable */

import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Alert
} from 'react-native';

import { useDispatch } from 'react-redux';
import { faPlus, faReceipt, faTag } from '@fortawesome/free-solid-svg-icons';

import { AddOptions } from './AddOptions';
import { showAddItemOptionsList, showAddItemForm } from '../../redux/Actions';

type menuProps = {
    visible: boolean | undefined;
    onClose: () => void;
}


export function NewItemMenu(props : menuProps): React.JSX.Element {

    const dispatch = useDispatch();

    // The user want to add a new item manually
    const manualAdd = () => {
        // Hide the add item options list modal
        dispatch(showAddItemOptionsList());
        // Show the manual add item modal
        dispatch(showAddItemForm());
    }

    const scanReceipt = () => {
        Alert.alert("This feature is still being developed");
    }

    const scanLabel = () => {
        Alert.alert("This feature is still being developed");
    }

  return (
    <>
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.onClose}
        >
            <View style={{width:'100%', height:'100%', backgroundColor:'black', opacity:0.8}}/>
        </Modal>
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.onClose}
        >
            <Pressable style={{position: 'absolute', width:'100%', height:'100%'}} onPress={props.onClose}/>
            <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                <View style = {styles.inputs}>
                    <Text style={{paddingTop: '10%', fontSize: 22, color:'white', paddingBottom: '5%'}}>Add new item</Text>
                    <AddOptions onCall={manualAdd} option='Add manually' icon={faPlus}/>
                    <AddOptions onCall={scanReceipt} option='Scan receipt' icon={faReceipt}/>
                    <AddOptions onCall={scanLabel} option='Scan label' icon={faTag}/>
                </View>
            </View>
            
        </Modal>
    </>
  );
}

const styles = StyleSheet.create({
    inputs:{
        alignItems:'center',
        backgroundColor: '#2E4FFF',
        width:'50%',
        height:'30%',
        borderRadius: 20
    }
})

