import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import ItemOptions from "../functionalComponents/ItemOptions";
import { Button, DimensionValue, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import colors from "../../config/colors";
import { useRef, useState } from "react";
import { EditItemFormModal } from "../functionalComponents/EditItemFormModal";
import Notifications from "../../Notifications";

type DebugScreenProps = NativeStackScreenProps<RootStackParamList, "Debug">;


export const Debug: React.FC<DebugScreenProps> = (props) => {

    // const viewRef = useRef<View | null>(null);    
    const [visible, setVisible] = useState<boolean>(false);
    const [menuPos, setMenuPos] = useState<{ top?: DimensionValue, bottom?: DimensionValue, left?: DimensionValue, right?: DimensionValue }>({});




    return <>
        
        <TouchableOpacity onPress={(event) => {
            const date = new Date(Date.now() + 10000);
            Notifications.scheduleNotification({
                date:date,
                title: "Title",
                message: "Test Notification",
                channelId: "channel-id",
                // allowWhileIdle: true
            })
            console.log("notification scheduled for", date);
            // setMenuPos({ left: event.nativeEvent.pageX, top: event.nativeEvent.pageY })
            // setVisible(true);
        }}>
            <View style={{height:123, width:43, marginLeft:100, marginTop:23, backgroundColor:colors.toasty_brown}} />
        </TouchableOpacity>


        {/* <ItemOptions 
            storageLocation="Fridge"
            onClose={() => setVisible(false)}
            style={menuPos}
            visible={visible}
        /> */}

        {/* <EditItemFormModal
            onClose={() => setVisible(false)}
            visible={visible}
            toEdit={{
                "name": "Fish",
                "type": "Meat",
                "expirationDate": "2023-12-22",
                "startDate": "2023-09-14",
                "quantity": 2,
                "expirationType": "Use By",
                "id": "650225b1fd162072c524dd75"
            }} 
        ></EditItemFormModal> */}

        

    </>
}