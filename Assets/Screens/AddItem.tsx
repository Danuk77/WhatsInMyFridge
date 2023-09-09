/* eslint-disable */
import { StyleSheet, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import fonts from "../../config/fonts"
import colors from "../../config/colors"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../types"
import { AddItemForm } from "../Functional components/AddItemForm"

type AddItemScreenProps = NativeStackScreenProps<RootStackParamList, "AddItem">;


export const AddItem:React.FC<AddItemScreenProps> = (props) => {

    return <SafeAreaView>

        {/* header TODO*/}

        <Text style={styles.headingText} >Add new item</Text>
        <AddItemForm></AddItemForm>

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