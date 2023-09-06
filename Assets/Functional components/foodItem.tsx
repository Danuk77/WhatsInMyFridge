/* eslint-disable */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity

} from 'react-native';

// Find the width of the screen the application is running on
const screenWidth : number = Dimensions.get('window').width;

export function foodItem(): JSX.Element {

  return (
    <View style={styles.foodItem}>
      {/* Logo of the type of food */}
        <View style={styles.itemImage}>
            <Image 
              style={styles.foodImage}
              source={require("../imageAssets/Fruits.png")}
            />
        </View>

        {/* The content inside the food item entry */}
        <View style={styles.foodItemContent}>

            <View style={{flexDirection:'row'}}>

              <Text
              style={{
                fontSize:22,
                color:'white',
              }}>
                Bananas
              </Text>


              {/* Edit button click */}
              <TouchableOpacity>
                <Image
                style={{
                  width: 20,
                  height:20,
                  resizeMode: 'contain'
                }}
                source={require("../imageAssets/edit.png")}/>
              </TouchableOpacity>

              {/* Trash button click */}
              <TouchableOpacity>
                <Image
                style={{
                  width: 20,
                  height:20,
                  resizeMode: 'contain'
                }}
                source={require("../imageAssets/trash.png")}/>
              </TouchableOpacity>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemImage:{
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  foodItem: {
    flexDirection: 'row',
    backgroundColor:'#2E81FF',
    borderRadius: 20,
    overflow: 'hidden',
  },
  foodImage: {
    width:80,
    height: 80,
    resizeMode:'contain',
  },
  foodItemContent:{
    flexDirection: 'column',
    paddingEnd:10
  }
})

