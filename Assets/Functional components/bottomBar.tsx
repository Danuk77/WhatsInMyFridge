/* eslint-disable */

import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import colors from "../../config/colors"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUtensils, faShoppingCart, faCog} from "@fortawesome/free-solid-svg-icons"



export function bottomBar(): JSX.Element {

    return (
        <View style={styles.bar}>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faUtensils} size={30} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faShoppingCart} size={30} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faCog} size={30} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    bar:{
        backgroundColor:colors.dark_blue,
        width:"100%",
        position:"absolute",
        bottom:0,
        left:0,
        flexDirection:"row",
        height:50,
    },
    iconContainer: {
        flex:1,
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
    },
    icon: {
        color:colors.white,
    }
})