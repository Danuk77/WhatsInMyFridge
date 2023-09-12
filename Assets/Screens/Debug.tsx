import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import ItemOptions from "../Functional components/ItemOptions";
import { Touchable, TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";
import { useRef } from "react";

type DebugScreenProps = NativeStackScreenProps<RootStackParamList, "Debug">;


export const Debug: React.FC<DebugScreenProps> = (props) => {

    const viewRef = useRef<View | null>(null);    

    return <>

        {/* <ItemOptions 
            storageLocation="Fridge"
            onClose={() => console.log("close")}
            style={{top:150, left:50}}
        /> */}

        <TouchableOpacity
            onPress={event => {
                if (viewRef.current != null)
                    viewRef.current.measure((fx, fy, width, height, px, py) => console.log(fx, fy, width, height, px, py));
            }}
        >
            <View style={{ position: "absolute", top: 100, left: 50, width: 100, height: 300, backgroundColor: colors.black }}
                ref={viewRef}

            >
            </View>
        </TouchableOpacity>

    </>
}