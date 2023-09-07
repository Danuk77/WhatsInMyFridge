/* eslint-disable */

import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ProgressBarAndroidComponent

} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import colors from "../../config/colors"
import { ProgressBar } from './ProgressBar';

type foodItemProps = {
  name: String;
  type: String;
  expirationDate:Date;
}


export function FoodItem(props : foodItemProps): React.JSX.Element {

  // TOTO
  // Function for handling what to do when the user clicks on the edit button
  const handleEdit = useCallback(() => {
    console.log("Editing");
  }, []);


  // TODO write the comment for this
  var iconToRender;
  if(props.type === "Fruit"){
    iconToRender = require("../imageAssets/Fruits.png");
  }else if(props.type === "Vegetable"){
    iconToRender = require("../imageAssets/Vegetables.png");
  }else{
    iconToRender = require("../imageAssets/Meats.png");
  }

  // Expiration date of the food item
  const exp : Date = new Date();
  const daysLeft = Math.floor((props.expirationDate.getTime() - exp.getTime())/ (1000 * 60 * 60 * 24));


  return (
    <View style={styles.foodItem}>
      {/* Logo of the type of food */}
        <View style={styles.itemImage}>
            <Image 
              style={styles.foodImage}
              source={iconToRender}
            />
        </View>

        {/* The content inside the food item entry */}
        <View style={styles.foodItemContent}>

            <View style={{flexDirection:'row',
                          flex:1,
                          justifyContent:'space-between'}}>

              <Text
              style={{
                fontSize:20,
                color:'white',
              }}>
                {props.name}
              </Text>

              {/* Edit button click */}
              <TouchableOpacity
                onPress={handleEdit}>
                <FontAwesomeIcon icon={faPen} size={20} style={{color:colors.white}} />
              </TouchableOpacity>

              
            </View>

            {/* Expiration date informaiton */}
            <View style={{
              flex:1,
              justifyContent:'flex-end',
              alignItems:'flex-end',
            }}>
              <Text
              style={{
                fontSize:13,
                color:'white',
                paddingEnd:'5%'
              }}>
                {`Exp: ${props.expirationDate.getDate()}/${props.expirationDate.getMonth() + 1}/${props.expirationDate.getFullYear()} (${daysLeft} days)`}
              </Text>

            </View>

            {/* Progress bar for expiration */}
            <View style={{
              flex:1,
              justifyContent:'center'
            }}>
              <ProgressBar startDate={60} expiryDate={7}/>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemImage:{
    paddingLeft: 5,
    paddingTop: 15,
    paddingBottom: 10,
    flex:1
  },
  foodItem: {
    width:'100%',
    flexDirection: 'row',
    backgroundColor:'#2E81FF',
    borderRadius: 20,
  },
  foodImage: {
    width:80,
    height: 80,
    resizeMode:'contain',
  },
  foodItemContent:{
    flex:2,
    flexDirection: 'column',
    paddingEnd:10,
    paddingTop: 10,
    overflow:'visible'
  }
})

