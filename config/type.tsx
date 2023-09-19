/* eslint-disable */
import { DimensionValue } from "react-native";
export type foodItem = {
    name:string, 
    type: string, 
    expirationDate: string, 
    startDate: string, 
    quantity: number, 
    expirationType: string,
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