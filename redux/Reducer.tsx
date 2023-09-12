/* eslint-disable */

import { createStoreHook } from "react-redux"

const initialState = {
    kitchenMode: 'Fridge',
    userName: '',
    Fridge: [],
    Freezer: [],
    Shelf: [],
    ShoppingList: [],
    showFilters: false,
    showAddItemForm: false,
    showFruits: true,
    showVegetables: true,
    showMeats: true,
    sortMode: 0
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
        default:
            return state
    }
}