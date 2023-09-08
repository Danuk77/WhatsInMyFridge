/* eslint-disable */

const initialState = {
    kitchenMode: 'Fridge'
}

export default function reducer(state=initialState, action:any){
    switch(action.type){
        case 'kitchenModeChange':
            return{
                ...state,
                kitchenMode: action.payload.newMode
            }
        default:
            return state
    }
}