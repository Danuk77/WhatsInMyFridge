/* eslint-disable */

import React, { useCallback, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ProgressBarAndroidComponent,
    TextInput,

} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen, faCalendar} from '@fortawesome/free-solid-svg-icons';
import colors from "../../config/colors"
import { ProgressBar } from './ProgressBar';
import fonts from '../../config/fonts';
import {useForm} from "react-hook-form"
import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker';
// import  from 'react-moment';

// type foodItemProps = {
//     name: String;
//     type: String;
//     expirationDate: Date;
// }

enum FoodCategory {
    Fruit = 0,
    Vegetable,
    Meat,
    __LENGTH
}
const foodImages = new Map<FoodCategory, any>([
    [FoodCategory.Fruit, require("../imageAssets/Fruits.png")],
    [FoodCategory.Vegetable, require("../imageAssets/Vegetables.png")],
    [FoodCategory.Meat, require("../imageAssets/Meats.png")]
]);

enum ExpirationType {
    UseBy, // used for items that go off and become dangerous
    SellBy // less dangerous
}
// maybe good practice for internationalization idk
const expirationTypeNames = new Map<ExpirationType, string>([
    [ExpirationType.UseBy, "Use By"],
    [ExpirationType.SellBy, "Best Before"]
])




type FormData = {
    name: string,
    // quantity: number,
    expirationType: string,
    expirationDate: string,
    dateAdded: string,
}

const MAX_QUANTITY = 100;

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'short', day: 'numeric'};


export function AddItemForm(/*props: foodItemProps*/): React.JSX.Element {

    // hooks.
    const [category, setCategory] = useState<FoodCategory>(FoodCategory.Fruit);


    const [quantity, setQuantity] = useState<String>("1");
    function handleQuantityChange(newQuantity: string) : void {
        // remove non digit chars
        var clean = newQuantity.replace(/[^0-9]/g, '');
        // cap
        if (Number(clean) > MAX_QUANTITY) {
            clean = MAX_QUANTITY.toString();
        }
        setQuantity(clean);
    }

    const [expirationDateString, setExpirationDateString] = useState<string>()
    const [expirationDate, setExpirationDate] = useState<Date>(new Date())
    function handleExpirationDateChange(date: Date) : void {
        setExpirationDate(date);
        setExpirationDateString(date.toLocaleDateString(undefined, DATE_OPTIONS));
    }
    const [expirationDatePickerOpen, setExpirationDatePickerOpen] = useState<boolean>(false);

    const [expirationType, setExpirationType] = useState<ExpirationType>(ExpirationType.UseBy);
    const [expirationTypeOpen, setExpirationTypeOpen] = useState<boolean>(false);


    const [dateAddedDatePickerOpen, setDateAddedDatePickerOpen] = useState<boolean>(false);


    const { handleSubmit, register, setValue, getValues } = useForm<FormData>()

    const iconToRender = foodImages.get(category);

    return (
        <View style={styles.foodItem}>
            {/* Logo of the type of food */}
            <View style={[styles.itemImage, {flex:1}]}>
                {/* cycle through food categories on press */}
                <TouchableOpacity onPress={() => setCategory((category + 1) % FoodCategory.__LENGTH)}>
                    <Image
                        style={styles.foodImage}
                        source={iconToRender}
                    />
                </TouchableOpacity>

            </View>

            {/* The content inside the food item entry */}
            <View style={[styles.foodItemContent, {flex:3}]}>
                <Text style={styles.fieldTitle}>Product Title & Quantity</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput 
                        style={[styles.inputBox, {flex:3, marginRight:5}]} 
                        onChangeText={(newText) => setValue('name', newText)}
                        placeholder='Title'
                    />
                    <TextInput
                        style={[styles.inputBox, { flex: 1}]}
                        keyboardType={'numeric'} // This prop help to open numeric keyboard
                        value={quantity.toString()}
                        onChangeText={handleQuantityChange}
                        placeholder='Qty'
                    />
                </View>
                {/* expiration date line */}
                <Text style={styles.fieldTitle}>Expiration Date</Text>
                {expirationTypeNames.values()}
                <View style={{flexDirection:"row"}}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <DropDownPicker
                            style={[styles.inputBox]}
                            open={expirationTypeOpen}
                            value={expirationType}
                            // convert item names to dropdown
                            items={Array.from(expirationTypeNames.entries()).map(([key, value]) => { return { label: value, value: key } })
                            }
                            setValue={setExpirationType}
                            setOpen={setExpirationTypeOpen}
                        />
                    </View>
                    <View style={[/*styles.inputBox*/, { flex: 1, flexDirection:'row'}]} >
                        <TextInput
                            style={{ flexGrow: 1}}
                            value={expirationDateString}
                            onChangeText={(value) => {setExpirationDateString(value)}}
                            placeholder={"e.g. " + new Date(Date.now()).toLocaleDateString(undefined, DATE_OPTIONS)}
                            onBlur={() => {
                                var dateInt;
                                console.log("here");
                                try{
                                    console.log(expirationDateString);
                                    dateInt = 0;
                                    console.log((new Date(dateInt)).toLocaleDateString(undefined, DATE_OPTIONS));
                                } catch (error) {
                                    return;
                                }
                                const newDate = new Date(dateInt);
                                setExpirationDate(newDate);
                                setExpirationDateString(newDate.toLocaleDateString(undefined, DATE_OPTIONS));
                            }}
                        />
                        {/* {expirationDate.toLocaleDateString(undefined, DATE_OPTIONS)} */}
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => setExpirationDatePickerOpen(true)}>
                            <FontAwesomeIcon icon={faCalendar} style={styles.icon}/>
                        </TouchableOpacity>                    
                    </View>
                    
                </View>
                {/* date picker */}
                <DatePicker
                    modal
                    mode='date'
                    open={expirationDatePickerOpen}
                    date={expirationDate}
                    onConfirm={(date) => {
                        setExpirationDatePickerOpen(false);
                        handleExpirationDateChange(date);
                    }}
                    onCancel={() => {
                        setExpirationDatePickerOpen(false)
                    }}
                />





            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemImage: {
        paddingLeft: 5,
        paddingTop: 15,
        paddingBottom: 10,
        flex: 1
    },
    foodItem: {
        width: '90%',
        flexDirection: 'row',
        backgroundColor: '#2E81FF',
        borderRadius: 20,
        marginTop: 10,
        paddingBottom:5
    },
    foodImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    foodItemContent: {
        flex: 2,
        flexDirection: 'column',
        paddingEnd: 10,
        paddingTop: 10,
        paddingBottom: 10,
        // paddingStart:10,
        overflow: 'visible'
    },
    fieldTitle: {
        color: colors.white,
        fontFamily: fonts.primary,
        fontSize:14
    },
    inputBox: {
        backgroundColor:colors.white,
        borderRadius:7,
        padding:5,
        height:30,
        minHeight:30,
        maxHeight:30,
        color:colors.black,
        fontFamily:fonts.primary,
        borderColor:colors.white,
        paddingLeft:4,
        paddingRight: 4

    },
    icon: {
        color:colors.black,
        alignSelf:'flex-end',
    }
})

