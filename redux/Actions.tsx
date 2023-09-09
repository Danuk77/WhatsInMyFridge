/* eslint-disable */

import { foodItem, userData } from "../config/type"

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