/* eslint-disable */
import axios from "axios";
import backend from "../config/backend";
import { StorageLocation, foodItem, userData } from '../config/type';



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


// module.exports = {getUserData, addItemToKitchen};