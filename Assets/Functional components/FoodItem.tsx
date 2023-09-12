/* eslint-disable */

import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,

} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import colors from "../../config/colors"
import { ProgressBar } from './ProgressBar';

type foodItemProps = {
  name: String;
  type: String;
  expirationDate:Date;
  location: String;
  startDate: Date;
  expirationType: String;
  quantity: number;
}


export function FoodItem(props : foodItemProps): React.JSX.Element {

  // TODO
  // Function for handling what to do when the user clicks on the edit button
  const handleEdit = useCallback(() => {
    console.log("Editing");
  }, []);

  // Load the images to show as the food item type
  const foodImages = new Map<String, any>([
    ["Fruit", require("../imageAssets/Fruits.png")],
    ["Vegetable", require("../imageAssets/Vegetables.png")],
    ["Meat", require("../imageAssets/Meats.png")]
  ]);

  // Expiration date of the food item
  const exp : Date = new Date();
  const daysLeft = Math.floor((props.expirationDate.getTime() - exp.getTime())/ (1000 * 60 * 60 * 24));

  const duration = (props.expirationDate.getTime() - props.startDate.getTime());
  
  var progress:number;
  var current:number;

  if(duration < 0 || daysLeft < 0) {
    progress = 100;
  }else{
    current = ((new Date()).getTime() - props.startDate.getTime());
    progress = parseFloat(((current/duration) * 100).toFixed());
  }
  
  return (
    <View style={[styles.foodItem, 
              props.location === "Fridge" ? {backgroundColor:'#2E81FF'} : 
              props.location === "Freezer" ? {backgroundColor: '#2E81FF'} :
              {backgroundColor : "#2E81FF"}
            ]}>
      {/* Logo of the type of food */}
        <View style={styles.itemImage}>
            <Image 
              style={styles.foodImage}
              source={foodImages.get(props.type)}
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
                {`${props.name} (${props.quantity})`}
              </Text>

              {/* Edit button click */}
              <TouchableOpacity
                onPress={handleEdit}>
                <FontAwesomeIcon icon={faEllipsisVertical} size={20} style={{color:colors.white, marginRight: '5%', marginTop:5}} />
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
                {daysLeft > 0 ? `${props.expirationType}: ${props.expirationDate.getDate()}/${props.expirationDate.getMonth() + 1}/${props.expirationDate.getFullYear()} (${daysLeft} days left)` : 
                `${props.expirationType}: ${props.expirationDate.getDate()}/${props.expirationDate.getMonth() + 1}/${props.expirationDate.getFullYear()} (${-daysLeft} days ago)`}
              </Text>

            </View>

            {/* Progress bar for expiration */}
            <View style={{
              flex:1,
              justifyContent:'center'
            }}>
              <ProgressBar progress={progress}/>
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
    width:'80%',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 10
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

