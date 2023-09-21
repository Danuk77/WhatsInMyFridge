/* eslint-disable */
import axios from "axios";
import backend from "../config/backend";
import { StorageLocation, foodItem, userData } from '../config/type';


/**
 * Gets the user's data when the application loads
 * @param userName The name of the user
 * @returns userData object containing all the data of the user
 */
export async function getUserData(userName: string){
    try {
        const response = await axios.get(`${backend.url}/userInfo/${userName}`);
        const userData: userData = {
            name: response.data.body.User,
            fridge: response.data.body.Fridge,
            freezer: response.data.body.Freezer,
            shelf: response.data.body.Shelf,
            ShoppingList: response.data.body.shoppingList
        }
        return userData;
    }
    catch (err){
        console.log(err);
    }

}

export async function addItemToKitchen(userName: string, kitchenMode: string, item: foodItem) {
    // Derefence the id and only send the rest of the body
    const  {id, ...body} = item;
    const response = await fetch(`${backend.url}/userItems/${userName}/${kitchenMode}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    return response;
}

export async function removeItem(userName: string, storageLocation: StorageLocation, id: string) {
    const response = await fetch(`${backend.url}/userItems/${userName}/${storageLocation}/${id}`, {
        method: "DELETE",
    })
    return response; 
}

export async function moveItem(userName: string, storageLocation: StorageLocation, id: string, newLocation: StorageLocation) {
    const response = await fetch(`${backend.url}/userItems/${userName}/${storageLocation}/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"newLocation":newLocation})
    });
    return response;
}

/**
 * Backend endpoint called when the user has edited some fields of a food item
 * @param userName Name of the user
 * @param storageLocation The location of the food item that was edited (fridge, freezer, shelf)
 * @param newValues The values of the food item after it has been edited
 * @returns 
 */
export async function editItem(userName: string, storageLocation: StorageLocation, newValues:foodItem){

    // Take the id out of the newValues (The backend model does not accept the ID in the body field)
    const {id, ...body} = newValues 

    const response = await fetch(`${backend.url}/userItems/edit/${userName}/${storageLocation}/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    return response;
}