/* eslint-disable */

import React, {useCallback, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  Dimensions,
  DimensionValue,
  Vibration,
  Animated,
  PanResponder

} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import colors from "../../config/colors"
import { ProgressBar } from './ProgressBar';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import { useDispatch } from 'react-redux';
import { showItemDropdown } from '../../redux/Actions';
import { DropdownSettings, StorageLocation } from '../../config/type';

type foodItemProps = {
  name: String;
  type: String;
  expirationDate:Date;
  location: String;
  startDate: Date;
  expirationType: String;
  quantity: number;
  id: string;
}


export function FoodItem(props : foodItemProps): React.JSX.Element {

  // Sliding gesture
  const pan = useRef(new Animated.ValueXY()).current

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gesturestate) => {
                return gesturestate.dx != 0 && gesturestate.dy != 0;
            },
            onPanResponderMove: Animated.event([null, {dx: pan.x}], {useNativeDriver: false}),
            onPanResponderRelease: () => {
              if (pan.x._value > -200 && pan.x._value < 200) {
                  // Reset the value to go back to the start using a spring animation
                  Animated.spring(pan, {
                    toValue: { x: 0, y: pan.y._value },
                    useNativeDriver: true, 
                  }).start();
              } else {
                  console.log("Delete or other thing");
              }
            },
        }),
      ).current;

  const dispatch = useDispatch();

  // Function for handling what to do when the user clicks on the edit button
  const handleEdit = useCallback((event: GestureResponderEvent) => {

    // choose where to display the option menu
    var coords = {} as {
      top?: DimensionValue,
      bottom?: DimensionValue,
      left?: DimensionValue,
      right?: DimensionValue
    };

    const dims = Dimensions.get("window");
    console.log(dims);
    console.log(event.nativeEvent.pageX, event.nativeEvent.pageY)
    if (event.nativeEvent.pageX < dims.width/2) {
      coords.left = event.nativeEvent.pageX;
    } else {
      coords.right = dims.width - event.nativeEvent.pageX;
    }
    if (event.nativeEvent.pageY < dims.height/2) {
      coords.top = event.nativeEvent.pageY;
    } else {
      coords.bottom = dims.height - event.nativeEvent.pageY;
    }

    console.log(coords);

    dispatch(showItemDropdown(props.id, props.location as StorageLocation, coords))
    // console.log("Editing");
  }, []);

  // Load the images to show as the food item type
  const foodImages = new Map<String, any>([
    ["Fruit", require("../imageAssets/Fruits.png")],
    ["Vegetable", require("../imageAssets/Vegetables.png")],
    ["Meat", require("../imageAssets/Meats.png")]
  ]);

  // Function for calculating the progress of the food item
  const calculateProgress = (start:number, end:number) : {progress:number, daysLeft:number, expired:boolean} => {
    // Today's date
    const curDate:number = (new Date()).getTime();

    var expired:boolean = false;
    var daysLeft: number = 0;
    var progress: number = 0;

    // Check if item is expired
    if(curDate > end){
      expired = true;
      progress = 100;
    }else{ 
      if(curDate > start){
        const duration = end - start;
        progress = parseFloat(((curDate - start) / duration * 100).toFixed());
      }
    }

    // Calculate the number of days (left from/since) expiration
    daysLeft = Math.floor((end - curDate)/ (1000 * 60 * 60 * 24));

    return {
      progress: progress,
      daysLeft:daysLeft,
      expired: expired
    }
  }

  // Calculate the state of the food item
  const {progress, daysLeft, expired} = calculateProgress(props.startDate.getTime(), props.expirationDate.getTime());
  
  return (
    <Animated.View style={{transform:[{translateX: pan.x}]}} {...panResponder.panHandlers}>

      <View style={[styles.foodItem, !expired ? {backgroundColor : "#2E81FF"} : {backgroundColor: '#FF6D6D'}]}>
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
                  {daysLeft > 0 ? `${props.expirationType}: ${props.expirationDate.getDate()}/${props.expirationDate.getMonth() + 1}/${props.expirationDate.getFullYear()}` : 
                  `${props.expirationType}: ${props.expirationDate.getDate()}/${props.expirationDate.getMonth() + 1}/${props.expirationDate.getFullYear()}`}
                </Text>
                <Text
                style={{
                  fontSize:11,
                  color:'white',
                  paddingEnd:'5%'
                }}>
                  {daysLeft >= 0 ? `(${daysLeft} days left)` : 
                  `(${-daysLeft} days ago)`}
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
    </Animated.View>

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

