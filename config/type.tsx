/* eslint-disable */
export type foodItem = {
    name:String, 
    type:String, 
    expirationDate:String, 
    startDate:String, 
    quantity: number, 
    expirationType:String,
    id: string
}

export type userData = {
    name:string,
    fridge: foodItem[],
    freezer: foodItem[],
    shelf: foodItem[],
    ShoppingList: []
}