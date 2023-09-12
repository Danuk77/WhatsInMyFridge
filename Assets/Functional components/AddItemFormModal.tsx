/* eslint-disable */
import React, { useCallback, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AddItemForm } from './AddItemForm';
import { addItemToKitchen, getUserData } from '../../Utils/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { addNewFoodItem } from '../../redux/Actions';
import colors from '../../config/colors';
import fonts from '../../config/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faToiletPortable, faSnowflake, faBreadSlice, IconDefinition } from '@fortawesome/free-solid-svg-icons';

type AddItemFormModalProps = {
    visible: boolean | undefined;
    onClose: () => void;
}

const iconDict = new Map<string, [IconDefinition, string]>([
    ["Fridge", [faToiletPortable, colors.fridgy_red]],
    ["Freezer", [faSnowflake, colors.freezer_blue]],
    ["Shelf", [faBreadSlice, colors.toasty_brown]]
]);

export function AddItemFormModal(props: AddItemFormModalProps): React.JSX.Element {

    const kitchenMode = useSelector((state: any) => state.kitchenMode);
    const userName = useSelector((state: any) => state.userName);
    const dispatch = useDispatch();

    const [kitchenModeIcon, kitchenModeColor] = iconDict.get(kitchenMode) as [IconDefinition, string];

    return <>
        {/* fade in modal */}
        <Modal
            visible={props.visible}
            transparent={true}
            animationType='fade'
            onRequestClose={props.onClose}
        >
            {/* blur the background */}
            <View style={styles.background}>
                {/* heading text */}
                <Text style={styles.text}>Add item to {kitchenMode} {""}
                    <FontAwesomeIcon icon={kitchenModeIcon} color={kitchenModeColor} size={30}/>
                </Text>
            </View>
        </Modal>

        {/* slide in modal */}
        <Modal
            visible={props.visible}
            transparent={true}
            animationType='slide'
            onRequestClose={props.onClose}
        >
            <Pressable
                style={{ position: 'absolute', height: "100%", width: "100%" }}
                onPressOut={props.onClose}
            />
            <View style={styles.boxView}>
                <AddItemForm
                    style={styles.box}
                    onSubmit={async (item) => {
                        try{
                            const response = await addItemToKitchen(userName, kitchenMode, item);
                            dispatch(addNewFoodItem(kitchenMode, item));
                        }catch(err){
                            console.log(err);
                        }
                        
                        props.onClose();
                    }}
                />
            </View>
        </Modal>
    </>
    
    


}

const styles = StyleSheet.create({
    text:{
        color:colors.white,
        fontFamily:fonts.primary,
        fontSize:30,
        top:150,
        fontWeight:'bold',
        alignSelf:"center"
    },
    background: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.black,
        opacity: 0.8
    },
    boxView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        // opacity:0.5
    },
    box: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    }
})