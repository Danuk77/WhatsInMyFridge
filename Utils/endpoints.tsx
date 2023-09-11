import axios from "axios";
import backend from "../config/backend";
import { foodItem, userData } from '../config/type';



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
    const response = await fetch(`${backend.url}/userItems/${userName}/${kitchenMode}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
    });
    return response;
    
        // .then((respose) => respose.json())
        // .then((responseData) => {
        //     console.log(JSON.stringify(responseData));

        // });
}


// module.exports = {getUserData, addItemToKitchen};