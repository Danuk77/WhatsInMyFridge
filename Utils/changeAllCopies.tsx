/* eslint-disable */

/**
 * Update the backend and the redux.
 */

import { Alert } from "react-native";
import { StorageLocation, foodItem } from "../config/type";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

import * as ReduxActions from "../redux/Actions";
import * as Backend from "./endpoints"
import backend from "../config/backend";

export async function addItemToKitchenAll(userName: string, kitchenMode:StorageLocation, item:foodItem, dispatch:Dispatch<AnyAction>) {

    if (!backend.enabled) {
        throw new Error("not implemented - require backend to create id of foodItem.")
    }

    var response;
    var newID: string;
    try {
        response = await Backend.addItemToKitchen(userName, kitchenMode, item);
        newID = JSON.parse(await response.text()).id;

    } catch (err) {
        Alert.alert('Failed to add item', "Please try again later", [
            { text: 'OK' },
        ]);
        console.error(err);
        return false;
    }

    if (!response.ok) {
        Alert.alert('Failed to add item', "Please try again later", [
            { text: 'OK' },
        ]);
        console.error(response);
        return false;
    }

    // Set up the new id
    item.id = newID;
    dispatch(ReduxActions.addNewFoodItem(kitchenMode, item));
    return true;
}


export async function removeItemAll(userName: string, itemLocation: StorageLocation, itemID: string, dispatch: Dispatch<AnyAction>) {

    if (backend.enabled) {

        let response: Response;
        try {
            response = await Backend.removeItem(userName, itemLocation, itemID);
        } catch (err) {
            console.error(err);
            Alert.alert('Failed to delete item', "Please try again later", [
                { text: 'OK' },
            ]);
            return false;
        }
        if (!response.ok) {
            console.error(response);
            Alert.alert('Failed to delete item', "Please try again later", [
                { text: 'OK' },
            ]);
            return false;
        }
    }


    dispatch(ReduxActions.removeItem(itemLocation, itemID));
    return true;
}

export async function moveItemAll(userName: string, storageLocation: StorageLocation, id: string, newLocation: StorageLocation, dispatch: Dispatch<AnyAction>) {

    if (backend.enabled) {
        let response: Response;
        try {
            response = await Backend.moveItem(userName, storageLocation, id, newLocation)
        } catch (err) {
            console.error(err);
            Alert.alert('Failed to move item', "Please try again later", [
                { text: 'OK' },
            ]);
            return false;
        }
        if (!response.ok) {
            console.error(response);
            Alert.alert('Failed to move item', "Please try again later", [
                { text: 'OK' },
            ]);
            return false;
        } 
    }


    dispatch(ReduxActions.moveItem(storageLocation, id, newLocation));
    return true;
}