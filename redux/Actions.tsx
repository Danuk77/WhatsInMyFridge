/* eslint-disable */

import { DimensionValue } from "react-native"
import { DropdownSettings, StorageLocation, foodItem, userData } from "../config/type"

// Action used for handling changes between fridge, freezer and shelf
export const changeKitchenMode = (newMode:String) => {
    return{
        type: 'kitchenModeChange',
        payload: {
            newMode: newMode
        }
    }
}

// Action dispatched when the app just started (Load the user's data from the backend)
export const loadUserData = (data:userData) => {
    return{
        type: 'loadUserData',
        payload: {
            name:data.name,
            fridge: data.fridge,
            freezer: data.freezer,
            shelf: data.shelf,
            shoppingList: data.ShoppingList
        }
    }
}

// Action dispatched to show and hide the filter menu for the food items
export const showFilters = () => {
    return{
        type: 'showFilters'
    }
}

export const showAddItemForm = () => {
    return {
        type: 'showAddItemForm'
    }
}

// Action dispatched to change the filters for the food types
export const changeFilter = (type:String) => {
    return{
        type: 'changeFilter',
        payload : {
            type: type
        }
    }
}

/**
 * Action dispatched to change the order of sorting in the food items
 * @param current The current mode we are in
 * @param size The total number of modes available
 */
export const changeSortMode = (current: number, size:number) => {
    const newMode = (current + 1) % size;
    return{
        type:'changeSortMode',
        payload: {
            value: newMode
        }
    };
}

/**
 * Action dispatched when adding a new item to the kitchen
 * @param location Fridge, freezer or shelf
 * @param foodItem The food item being added to the particular location
 * @returns Object used by reducer
 */
export const addNewFoodItem = (location: string, foodItem:foodItem) => {
    return{
        type:'addFoodItem',
        payload: {
            type: location,
            newItem: foodItem
        }
    };
}

/**
 * Action dispatched when showing the list of options the user can add a new item with
 * @returns void
 */
export const showAddItemOptionsList = () => {
    return{
        type: 'addItemsOptionsList'
    }
}

/**
 * Display the item dropdown with the correct settings
 * @param itemID 
 * @param itemLocation Fridge / Freezer etc
 * @param position Style used for positioning the dropdown menu
 * @returns 
 */
export const showItemDropdown = (
    itemID: string, 
    itemLocation: StorageLocation, 
    position: DropdownSettings["position"]
) => ({
    type: "showItemDropdown",
    payload: {
        itemID: itemID,
        itemLocation: itemLocation,
        position: position
    }
})

/**
 * Hide the item dropdown, keeping its other settings intact.
 * @returns 
 */
export const hideItemDropdown = () => ({
    type: "hideItemDropdown",
})

/**
 * Remove foodItem with specified id from specified location
 * @param storageLocation Fridge/Freezer etc
 * @param id
 * @returns 
 */
export const removeItem = (/*userName: string,*/ storageLocation: StorageLocation, id:string) => ({
    type: "removeItem",
    payload: {
        // userName: userName,
        storageLocation: storageLocation,
        id:id
    }
})