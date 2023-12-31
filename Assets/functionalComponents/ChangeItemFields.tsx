/* eslint-disable */

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ViewStyle,
    Keyboard,

} from 'react-native';

import colors from "../../config/colors"
import fonts from '../../config/fonts';
import DropDownPicker from 'react-native-dropdown-picker';
import { getUserLocale } from 'get-user-locale';
import moment from "moment";
import { DateSelectorBox } from './DateSelectorBox';
import { foodItem } from '../../config/type';


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
const foodCategoryNames = new Map<FoodCategory, string>([
    [FoodCategory.Fruit, "Fruit"],
    [FoodCategory.Vegetable, "Vegetable"],
    [FoodCategory.Meat, "Meat"]
]);


enum ExpirationType {
    UseBy, // used for items that go off and become dangerous
    BestBefore // less dangerous
}
// maybe good practice for internationalization idk
const expirationTypeNames = new Map<ExpirationType, string>([
    [ExpirationType.UseBy, "Use By"],
    [ExpirationType.BestBefore, "Best Before"]
])

const MAX_QUANTITY = 100;

type ChangeItemFieldsProps = { 
    onSubmit: (arg0: foodItem) => void; 
    style?: ViewStyle;
    item: foodItem
}

export function ChangeItemFields(props: ChangeItemFieldsProps): React.JSX.Element {

    // hooks.
    const [category, setCategory] = useState<FoodCategory>(
        Array.from(foodCategoryNames.entries()).find(([val, name]) => name === props.item.type)![0]
    );

    const [name, setName]= useState<string>(props.item.name);
    const [quantity, setQuantity] = useState<string>(props.item.quantity.toString());

    function handleQuantityChange(newQuantity: string) : void {
        // remove non digit chars
        var clean = newQuantity.replace(/[^0-9]/g, '');
        // cap
        if (Number(clean) > MAX_QUANTITY) {
            clean = MAX_QUANTITY.toString();
        }
        setQuantity(clean);
    }

    const [expirationType, setExpirationType] = useState<ExpirationType>(
        Array.from(expirationTypeNames.entries()).find(([_, name]) => name === props.item.expirationType)![0]
    );
    const [expirationTypeOpen, setExpirationTypeOpen] = useState<boolean>(false);
    const [expirationDate, setExpirationDate] = useState<Date | undefined>(new Date(props.item.expirationDate));
    const [dateAdded, setDateAdded] = useState<Date | undefined>(new Date(props.item.startDate));

    // keep track of whether the text in the date entry boxes are valid
    const [expirationDateValid, setExpirationDateValid] = useState<boolean>(expirationDate !== undefined);
    const [dateAddedValid, setDateAddedValid] = useState<boolean>(dateAdded !== undefined);

    const [titleErr, setTitleErr] = useState<string | undefined>(undefined);
    const [quantityErr, setQuantityErr] = useState<string | undefined>(undefined);
    const [expirationDateErr, setExpirationDateErr] = useState<string | undefined>(undefined);
    const [dateAddedErr, setDateAddedErr] = useState<string | undefined>(undefined);

    const iconToRender = foodImages.get(category);

    function handleSubmit() {
        // blurs all text entry boxes
        // because there are some listenens on the date entry boxes that use onBlur() to format the date
        Keyboard.dismiss();

        // check everything is valid
        var valid = true;
        if (name == "" || name === undefined){
            valid = false;
            setTitleErr("Please enter a title")
        } else {
            setTitleErr(undefined);
        }
        
        const quantityInt = parseInt(quantity);
        if (!Number.isInteger(quantityInt) || quantityInt < 1) {
            valid = false;
            setQuantityErr("Please enter a quantity > 0")
        } else {
            setQuantityErr(undefined);
        }

        if (!expirationDateValid) {
            valid = false;
            setExpirationDateErr("Please enter a valid date")
        } else {
            setExpirationDateErr(undefined)
        }

        if (!dateAddedValid) {
            valid = false;
            setDateAddedErr("Please enter a valid date")
        } else {
            setDateAddedErr(undefined)
        }


        if (!valid) return;



        props.onSubmit({
            name: name,
            type: foodCategoryNames.get(category) as string,
            expirationDate: moment(expirationDate).format("YYYY-MM-DD"),
            startDate: moment(dateAdded).format("YYYY-MM-DD"),
            quantity: quantityInt,
            expirationType: expirationTypeNames.get(expirationType),
            id: props.item.id
        } as foodItem);

    }

    return (
        <View style={[props.style, styles.foodItem]}>
            <View style={{flexDirection:'row'}}>
                {/* Logo of the type of food */}
                <View style={[styles.itemImage, { flex: 1 }]}>
                    {/* cycle through food categories on press */}
                    <TouchableOpacity onPress={() => setCategory((category + 1) % FoodCategory.__LENGTH)}>
                        <Image
                            style={styles.foodImage}
                            source={iconToRender}
                        />
                    </TouchableOpacity>

                </View>

                {/* The content inside the food item entry */}
                <View style={[styles.foodItemContent, { flex: 3 }]}>
                    <Text style={styles.fieldTitle}>Product Title & Quantity</Text>
                    {/* error messages */}
                    <View style={{
                        flexDirection:"row", 
                        display:(titleErr===undefined&&quantityErr===undefined) ? "none" : "flex"
                    }}>
                        <Text style={[styles.errMsg, {textAlign:'left'}]}>{titleErr}</Text>
                        <Text style={[styles.errMsg, { textAlign: 'right' }]}>{quantityErr}</Text>
                    </View>
                    {/* input boxes */}
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={[styles.inputBox, { flex: 3, marginRight: 5 }]}
                            onChangeText={setName}
                            placeholder='Title'
                            defaultValue={name}
                        />
                        <TextInput
                            style={[styles.inputBox, { flex: 1 }]}
                            keyboardType={'numeric'} // This prop help to open numeric keyboard
                            value={quantity.toString()}
                            onChangeText={handleQuantityChange}
                            placeholder='Qty'
                        />
                    </View>
                    {/* expiration date line */}
                    <Text style={styles.fieldTitle}>Expiration Date</Text>
                    {/* error messages */}
                    <View style={{
                        flexDirection: "row",
                        display: (expirationDateErr === undefined) ? "none" : "flex"
                    }}>
                        <Text style={[styles.errMsg, { textAlign: 'right' }]}>{expirationDateErr}</Text>
                    </View>
                    {/* entry boxes */}
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 2, marginRight: 5 }}>
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

                        <DateSelectorBox
                            style={[styles.inputBox, { flex: 3 }]}
                            iconStyle={styles.icon}
                            onDateChange={(date) => {setExpirationDate(date); setExpirationDateValid(true)}}
                            date={expirationDate}
                            onInvalidEntry={() => setExpirationDateValid(false)}
                        />

                    </View>
                    {/* date added */}
                    <Text style={styles.fieldTitle}>Date Added</Text>
                    {/* error messages */}
                    <View style={{
                        flexDirection: "row",
                        display: (dateAddedErr === undefined) ? "none" : "flex"
                    }}>
                        <Text style={[styles.errMsg, { textAlign: 'left' }]}>{dateAddedErr}</Text>
                    </View>
                    {/* entry boxes */}
                    <DateSelectorBox
                        style={styles.inputBox}
                        iconStyle={styles.icon}
                        onDateChange={(date) => {setDateAdded(date); setDateAddedValid(true);}}
                        date={dateAdded}
                        onInvalidEntry={() => setDateAddedValid(false)}
                    />

                </View>
            </View>

            <TouchableOpacity 
                style={styles.button} 
                onPress={handleSubmit}

            >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignSelf:"center",
        // verticalAlign:'middle',
        // alignItems: 'center',
        width:"80%",
        marginTop: 22,
    },



    itemImage: {
        paddingLeft: 5,
        paddingTop: 15,
        paddingBottom: 10,
        flex: 1
    },
    foodItem: {
        width: '90%',
        flexDirection: 'column',
        backgroundColor: colors.dark_blue,
        borderRadius: 20,
        marginTop: 10,
        paddingBottom:15
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
        fontSize: 14,
        marginBottom: 8
    },
    errMsg: {
        color: colors.error_red,
        fontFamily: fonts.primary,
        fontSize: 14,
        marginBottom: 8,
        flexGrow:1
    },
    inputBox: {
        backgroundColor:colors.white,
        borderRadius:7,
        padding:5,
        height:45,
        minHeight:45,
        maxHeight:45,
        color:colors.black,
        fontFamily:fonts.primary,
        borderColor:colors.white,
        paddingLeft:4,
        paddingRight: 4,
        marginBottom:10

    },
    icon: {
        color:colors.black,
        alignSelf:'flex-end',
    },
    button:{
        alignSelf:"center",
        backgroundColor:colors.white,
        paddingLeft:25,
        paddingRight: 25,
        paddingTop:2,
        paddingBottom: 2,
        borderRadius: 15,

    },
    buttonText: {
        color: colors.black,
        fontFamily: fonts.primary,
        fontSize: 20
    }
})

