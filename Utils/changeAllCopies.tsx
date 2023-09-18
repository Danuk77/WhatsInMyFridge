/**
 * Update the backend and the redux.
 */

import { Alert } from "react-native";
import { StorageLocation, foodItem } from "../config/type";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

import * as ReduxActions from "../redux/Actions";
import * as Backend from "./endpoints"

export async function addItemToKitchenAll(userName: string, kitchenMode:StorageLocation, item:foodItem, dispatch:Dispatch<AnyAction>) {

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


    // backend
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

    dispatch(ReduxActions.removeItem(itemLocation, itemID));
    return true;
}