/* eslint-disable */
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import colors from "../../config/colors"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faList, faPlus} from "@fortawesome/free-solid-svg-icons"

export function topBar(): JSX.Element {

    return (
        <View style={styles.bar}>
            <Text style={styles.headerText}>WhatsInMyFridge</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faList} size={30} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faPlus} size={30} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: colors.dark_blue,
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        flexDirection: "row",
        height: 70,
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
    },
    headerText: {
        fontFamily:"LilitaOne-Regular", // doesn't work
        // also you might need to run "npx react-native-asset"
        fontSize:30,
        color:colors.white,
        paddingLeft:20,
        paddingRight: 20
        
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
    },
    icon: {
        color: colors.white,
    }
})