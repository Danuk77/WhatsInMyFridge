import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import ItemOptions from "../functionalComponents/ItemOptions";
import { Button, DimensionValue, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import colors from "../../config/colors";
import { useRef, useState } from "react";

type DebugScreenProps = NativeStackScreenProps<RootStackParamList, "Debug">;


export const Debug: React.FC<DebugScreenProps> = (props) => {

    // const viewRef = useRef<View | null>(null);    
    const [visible, setVisible] = useState<boolean>(false);
    const [menuPos, setMenuPos] = useState<{ top?: DimensionValue, bottom?: DimensionValue, left?: DimensionValue, right?: DimensionValue }>({});

    return <>
        
        <TouchableWithoutFeedback onPress={(event) => {
            setMenuPos({ left: event.nativeEvent.pageX, top: event.nativeEvent.pageY })
            setVisible(true);
        }}>
            <View style={{height:123, width:43, marginLeft:100, marginTop:23, backgroundColor:colors.toasty_brown}} />
        </TouchableWithoutFeedback>


        <ItemOptions 
            storageLocation="Fridge"
            onClose={() => setVisible(false)}
            style={menuPos}
            visible={visible}
        />

    </>
}