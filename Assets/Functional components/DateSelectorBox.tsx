import { Falsy, RecursiveArray, RegisteredStyle, StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import colors from "../../config/colors";
import { useState } from "react";
import getUserLocale from "get-user-locale";
import moment from "moment";
import fonts from "../../config/fonts";
import { FontAwesomeIcon, FontAwesomeIconStyle } from "@fortawesome/react-native-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { CalendarModal } from "./CalendarModal";

type DateSelectorBoxProps = {
    style: ViewStyle | ViewStyle[];
    iconStyle: FontAwesomeIconStyle;
    date: Date;
    onDateChange: (arg0: Date) => void; 
}

export function DateSelectorBox(props: DateSelectorBoxProps): React.JSX.Element {

    const userLocale = getUserLocale();
    const [dateString, setDateString] = useState<string>("");
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

    const now = moment(Date.now());
    now.locale(userLocale)

    function handleTextDefocus() {
        // when user clicks away from the box
        // format the date and call onDateChange prop
        const m = moment(dateString, "L", userLocale);
        if (!m.isValid()) {
            console.log("The date is invalid!")
            return;
        }
        console.log(m)
        props.onDateChange(m.toDate())
        setDateString(m.format("L"));
    }

    return <View style={[props.style, styles.inputBox]}>
        <TextInput
            style={styles.text}
            value={dateString}
            onChangeText={setDateString}
            placeholder={"e.g. " + now.format("L")}
            onBlur={handleTextDefocus}
        />
        <TouchableOpacity 
            style={{ flex: 1, alignSelf:"flex-end"}} 
            onPress={() => {setCalendarOpen(true); handleTextDefocus()}}
        >
            <FontAwesomeIcon icon={faCalendar} style={[props.iconStyle, styles.icon]} />
        </TouchableOpacity> 
        <CalendarModal
            visible={calendarOpen}
            onDateChange={(date) => {
                // replace the text in the box
                const m = moment(date);
                m.locale(userLocale);
                setDateString(m.format("L"));
                // change the date - callback
                props.onDateChange(m.toDate())
            }}
            onConfirm={() => setCalendarOpen(false)}
            date={props.date}
        />
    </View>


}

const styles = StyleSheet.create({
    text: { 
        flexGrow: 1, 
        color: colors.black,
        fontFamily:fonts.primary,
        height: 50, 
        position: "relative",
        top:-15,
        left:-2
    },
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignSelf: "center",
        position: 'absolute',
        verticalAlign: 'middle',
        // alignItems: 'center',
        width: "80%",
        marginTop: 22,
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingBottom: 10
    },
    calendar: {
        borderRadius: 20
    },
    button: {

    },
    inputBox: {
        backgroundColor: colors.white,
        borderRadius: 7,
        padding: 5,
        height: 30,
        minHeight: 30,
        maxHeight: 30,
        color: colors.black,
        fontFamily: fonts.primary,
        borderColor: colors.white,
        paddingLeft: 4,
        paddingRight: 4,
        flexDirection:"row"

    }, 
    icon: {
        color: colors.black,
        alignSelf: 'flex-end',
        top:-2
    }
})