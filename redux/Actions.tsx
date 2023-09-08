/* eslint-disable */

// Action used for handling changes between fridge, freezer and shelf
export const changeKitchenMode = (newMode:String) => {
    return{
        type: 'kitchenModeChange',
        payload: {
            newMode: newMode
        }
    }
}