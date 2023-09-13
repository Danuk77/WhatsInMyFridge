import { DimensionValue } from "react-native";

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

export type StorageLocation = "Fridge" | "Freezer" | "Shelf";

export type userData = {
    name:string,
    fridge: foodItem[],
    freezer: foodItem[],
    shelf: foodItem[],
    ShoppingList: []
}

export type DropdownSettings = {
    visible: boolean,
    position?: {
        top?: DimensionValue,
        bottom?: DimensionValue,
        left?: DimensionValue,
        right?: DimensionValue
    },
    itemID?: string,
    itemLocation?: StorageLocation
}