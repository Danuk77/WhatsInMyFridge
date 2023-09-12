import { IconDefinition, faBreadSlice, faPen, faSnowflake, faToiletPortable, faTrash } from "@fortawesome/free-solid-svg-icons";
import {FlatList, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import colors from "../../config/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import fonts from "../../config/fonts";


const iconDict = new Map<string, [IconDefinition, string]>([
    ["Fridge", [faToiletPortable, colors.fridgy_red]],
    ["Freezer", [faSnowflake, colors.freezer_blue]],
    ["Shelf", [faBreadSlice, colors.toasty_brown]]
]);

type ItemOptionsProps = {
    storageLocation: string;
    visible: boolean;
    onClose: () => void;
    style?: ViewStyle;
}

export default function ItemOptions(props: ItemOptionsProps) {

    function moveTo(location: string) {
        console.log("Move to " + location)
    }

    const x = Array(iconDict.keys());

    return <Modal 
        visible={props.visible}
        onRequestClose={props.onClose}
        transparent={true}
        animationType="fade"
        style={{position:"relative"}}
    >
        {/* press outside to close */}
        <Pressable 
            onPress={props.onClose} 
            style={{ position: "absolute", width: "100%", height: "100%" }} 
        />

        <View style={[props.style, styles.container]}>
            <FlatList
                data={[
                    {
                        text: "Edit Details",
                        icon: faPen,
                        iconColor: colors.white,
                        onPress: () => { console.log("Edit Details") }
                    },
                    {
                        text: "Remove",
                        icon: faTrash,
                        iconColor: colors.white,
                        onPress: () => { console.log("Remove") }
                    }
                ]
                    // "move to" options - exclude the location it's already in
                    .concat(Array.from(iconDict.entries())
                        .filter(([loc, _]) => loc != props.storageLocation)
                        .map(([loc, [icon, iconColor]]) => ({
                            text: "Move to " + loc,
                            icon: icon,
                            iconColor: iconColor,
                            onPress: () => moveTo(loc)
                        })
                        ))}

                renderItem={(option) => (
                    <TouchableOpacity onPress={() => { props.onClose(); option.item.onPress() }}>
                        {/* dont add top border to first item */}
                        <View style={option.index == 0 ? [styles.item] : [styles.item, styles.allButTopItem]}>
                            <Text style={styles.text}>
                                <FontAwesomeIcon icon={option.item.icon} color={option.item.iconColor} />
                                {" "} {option.item.text}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    </Modal>
    
    
    

}

ItemOptions.defaultProps = {
    style: undefined,
    visible: true,
    onClose: () => {}
}

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        overflow:"hidden",
        borderRadius:12
    },
    item: {
        // width:"100%",
        backgroundColor:colors.dark_blue,
        paddingHorizontal:10,
        paddingVertical:8
    }, 
    allButTopItem: {
        borderTopColor: colors.white,
        borderTopWidth: 2,
    },
    text: {
        fontSize:15,
        color:colors.white,
        fontFamily:fonts.primary
    }
})