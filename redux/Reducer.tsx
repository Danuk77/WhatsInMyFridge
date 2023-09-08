/* eslint-disable */

export default function reducer(state={}, action:any){
    switch(action.type){
        case 'test':
            return{
                ...state,
                newState: action.payload.test
            }
        default:
            return state
    }
}