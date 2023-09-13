/* eslint-disable */
import { Button, GestureResponderEvent, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import colors from '../../config/colors';
import { useState } from 'react';
import moment from 'moment';

type CalendarModalProps = {
    date: Date | undefined, 
    visible: boolean | undefined; 
    onConfirm: ((event: GestureResponderEvent) => void) | undefined; 
    onDateChange: (arg0: Date) => void | undefined; 
}

export function CalendarModal(props: CalendarModalProps): React.JSX.Element {

    var markedDates = Object();
    // create the markedDates prop argument for the calendar
    if (props.date !== undefined)
        markedDates[moment(props.date).format("YYYY-MM-DD")] = { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' };

    return <Modal
        visible={props.visible}
        onRequestClose={props.onConfirm}
        transparent={true}
        animationType="slide"
    >
        {/* TouchableOpacity is the background so the calendar quits when the user presses it (clicks outside the calendar) */}
        <TouchableOpacity
            style={{height:"100%"}}
            activeOpacity={1}
            onPressOut={props.onConfirm}
        >
            <View style={{justifyContent:"center", height:"100%"}}>
                <View style={styles.centeredView}>
                    <Calendar
                        style={styles.calendar}
                        date={moment(props.date).format("YYYY-MM-DD")}
                        onDayPress={day => {
                            console.log(day.dateString);
                            console.log(new Date(day.dateString));
                            if (props.onDateChange !== undefined) {
                                console.log("change date")
                                props.onDateChange(new Date(day.dateString))
                            }
                        }}
                        markedDates={markedDates}
                    />
                    <View style={{ alignItems: "center" }} >
                        <Button title='OK' onPress={props.onConfirm} ></Button>
                    </View>
                </View>
            </View>
            
        </TouchableOpacity>
        

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
        backgroundColor:colors.white,
        borderRadius:20,
        paddingBottom:10
    },
    calendar: {
        borderRadius: 20
    },
    button:{

    }
})