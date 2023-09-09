import { Button, GestureResponderEvent, Modal, StyleSheet, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import colors from '../../config/colors';
import { useState } from 'react';

type CalendarModalProps = { 
    visible: boolean | undefined; 
    onConfirm: ((event: GestureResponderEvent) => void) | undefined; 
    onDateChange: (arg0: Date) => void | undefined; 
}

export function CalendarModal(props: CalendarModalProps): React.JSX.Element {

    const [selectedDate, setSelectedDate] = useState<string|undefined>(undefined);

    var markedDates = Object();
    if (selectedDate !== undefined)
        markedDates[selectedDate] = { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' };

    return <Modal
        visible={props.visible}
        onRequestClose={props.onConfirm}
        transparent={true}
        animationType="slide"
    >
        <View style={styles.centeredView}>
            <Calendar
                date={selectedDate}
                onDayPress={day => {
                    console.log(day.dateString);
                    console.log(new Date(day.dateString));
                    if (props.onDateChange !== undefined) {
                        console.log("change date")
                        props.onDateChange(new Date(day.dateString))
                    }
                    setSelectedDate(day.dateString);
                }}
                markedDates={markedDates}
            />
            <View style={{flexDirection:'row'}}>
                <Button title='OK' onPress={props.onConfirm}></Button>
            </View>
        </View>

    </Modal>
}

const styles = StyleSheet.create({
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignSelf:"center",
        position:'absolute',
        verticalAlign:'middle',
        // alignItems: 'center',
        width:"80%",
        marginTop: 22,
        backgroundColor:colors.white
    }
})