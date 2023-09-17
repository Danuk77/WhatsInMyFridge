/* eslint-disable */

import { DimensionValue } from "react-native"
import { createStoreHook } from "react-redux"
import { DropdownSettings as ItemDropdownSettings, StorageLocation, foodItem } from "../config/type"

const initialState = {
    kitchenMode: 'Fridge',
    userName: '',
    Fridge: [] as foodItem[],
    Freezer: [] as foodItem[],
    Shelf: [] as foodItem[],
    ShoppingList: [],
    showFilters: false,
    showAddItemForm: false,
    showFruits: true,
    showVegetables: true,
    showMeats: true,
    sortMode: 0,
    showAddItemOptions: false,

    itemDropdownSettings: {
        visible: false,
    } as ItemDropdownSettings,
}

export default function reducer(state=initialState, action:any){
    switch(action.type){
        case 'kitchenModeChange':
            return{
                ...state,
                kitchenMode: action.payload.newMode
            }
        case 'loadUserData':
            return{
                ...state,
                userName: action.payload.name,
                Fridge: action.payload.fridge,
                Freezer: action.payload.freezer,
                Shelf: action.payload.shelf,
                shoppingList: action.payload.shoppingList
            }
        case "addFoodItem":
            switch (action.payload.type) {
                case "Fridge":
                    return {
                        ...state,
                        // newItem needs to be of type foodItem
                        Fridge: [...state.Fridge, action.payload.newItem]
                    }
                case "Freezer":
                    return {
                        ...state,
                        // newItem needs to be of type foodItem
                        Freezer: [...state.Freezer, action.payload.newItem]
                    }
                case "Shelf":
                    return {
                        ...state,
                        // newItem needs to be of type foodItem
                        Shelf: [...state.Shelf, action.payload.newItem]
                    }
            }

        case 'showFilters':
            return{
                ...state,
                showFilters: !state.showFilters
            }
        
        case "showAddItemForm":
            return {
                ...state,
                showAddItemForm: !state.showAddItemForm
            }

        // Reducer for changing the filters (what type of food is seen)
        case 'changeFilter':
            switch (action.payload.type){
                case 'Fruit':
                    return{
                        ...state,
                        showFruits : !state.showFruits
                    }
                case 'Vegetable':
                    return{
                        ...state,
                        showVegetables : !state.showVegetables
                    }
                case 'Meat':
                    return{
                        ...state,
                        showMeats : !state.showMeats
                    }
            }
        case 'changeSortMode':
            return{
                ...state,
                sortMode: action.payload.value
            }
        case 'userLoggedIn':
            return{
                ...state,
                userName: action.payload.value
            }
        case 'addItemsOptionsList':
            return{
                ...state,
                showAddItemOptions : !state.showAddItemOptions
            }
        case "showItemDropdown":
            return {
                ...state,
                itemDropdownSettings:{
                    visible: true,
                    itemID: action.payload.itemID,
                    itemLocation: action.payload.itemLocation,
                    position: action.payload.position
                } as ItemDropdownSettings
            }
        case "hideItemDropdown":
            return {
                ...state,
                itemDropdownSettings: {
                    ...state.itemDropdownSettings,
                    visible: false
                } as ItemDropdownSettings
            }
        case "removeItem":
            switch (action.payload.storageLocation as StorageLocation) {
                case "Fridge":
                    return {
                        ...state,
                        Fridge: state.Fridge.filter((x) => x.id != action.payload.id)
                    }
                case "Freezer":
                    return {
                        ...state,
                        Freezer: state.Freezer.filter((x) => x.id != action.payload.id)
                    }
                case "Shelf":
                    return {
                        ...state,
                        Shelf: state.Shelf.filter((x) => x.id != action.payload.id)
                    }
                default:
                    console.error(`Storage location ${action.payload.storageLocation} not implemented`);
                    return state
            }

        default:
            return state
    }
}