/* eslint-disable */

const initialState = {
    kitchenMode: 'Fridge',
    userName: '',
    Fridge: [],
    Freezer: [],
    Shelf: [],
    ShoppingList: []
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
        default:
            return state
    }
}