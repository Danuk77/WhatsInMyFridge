import React, { useCallback, useState } from 'react';
import { Modal, Pressable, TouchableOpacity, View } from 'react-native';
import { AddItemForm } from './AddItemForm';
import { addItemToKitchen, getUserData } from '../../Utils/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserData } from '../../redux/Actions';
import colors from '../../config/colors';

type AddItemFormModalProps = {
    visible: boolean | undefined;
    onClose: () => void;
}

export function AddItemFormModal(props: AddItemFormModalProps): React.JSX.Element {

    const kitchenMode = useSelector((state: any) => state.kitchenMode);
    const userName = useSelector((state: any) => state.userName);
    const dispatch = useDispatch();

    return <Modal
        visible={props.visible}
        transparent={true}
        animationType="slide"
        // style={{vre}}
    >
        <Pressable
            style={{ position:'absolute', height: "100%", width: "100%"}}
            // activeOpacity={1}
            onPressOut={props.onClose}
        >
        </Pressable>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <AddItemForm
                style={{}}
                onSubmit={async (item) => {
                    await addItemToKitchen(userName, kitchenMode, item);
                    props.onClose();
                    
                    const newData = await getUserData(userName);
                    if (newData !== undefined) {
                        dispatch(loadUserData(newData))
                    } else {
                        console.log("unable to reload user data")
                    }
                }}
            />
        </View>
    </Modal>

}
