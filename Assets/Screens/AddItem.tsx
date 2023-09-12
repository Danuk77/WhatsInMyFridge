/* eslint-disable */
import { StyleSheet, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import fonts from "../../config/fonts"
import colors from "../../config/colors"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../types"
import { AddItemForm } from "../Functional components/AddItemForm"
import backend from "../../config/backend"
import { useDispatch, useSelector } from "react-redux"
import {addItemToKitchen, getUserData} from "../../Utils/endpoints"
import { loadUserData } from "../../redux/Actions"

type AddItemScreenProps = NativeStackScreenProps<RootStackParamList, "AddItem">;

export const AddItem:React.FC<AddItemScreenProps> = (props) => {

    const kitchenMode = useSelector((state: any) => state.kitchenMode);
    const userName = useSelector((state: any) => state.userName);
    const dispatch = useDispatch();


    return <SafeAreaView>

        {/* header TODO*/}

        <Text style={styles.headingText} >Add new item</Text>
        <AddItemForm 
            style={{}}
            onSubmit={async (item) => {
                await addItemToKitchen(userName, kitchenMode, item);
                const newData = await getUserData(userName);
                if (newData !== undefined) {
                    dispatch(loadUserData(newData)) 
                } else {
                    console.log("unable to reload user data")
                }
        }}></AddItemForm>

    </SafeAreaView>

}


const styles = StyleSheet.create({
    headingText: {
        alignSelf:"center",
        fontSize: 23,
        fontFamily:fonts.primary,
        color:colors.black,
    }
})