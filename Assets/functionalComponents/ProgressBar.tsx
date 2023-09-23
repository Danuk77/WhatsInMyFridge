/* eslint-disable */

import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from '@react-navigation/native';
import React, {useCallback, useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';


type progressBarProps = {
    progress:number
}

export function ProgressBar(props:progressBarProps): JSX.Element {

    // State variable to sotre how close the item is to expire
    const [width, setWidth] = useState<number>(props.progress);
    const [color, setColor] = useState<string>('#52FF00');

    // Used for setting up the animation for the progress bar to go from 0 to the width value
    const animatedWidth = useRef(new Animated.Value(0)).current;

    /**
     * Function for returning the colour to show in the completed section of the progress bar
     * @param width Closeness to expiration data (Value between 0 and 100)
     * @returns A colour in string format
     */
    const getColor = (width:number) => {
        if(width< 50){
            return('#52FF00');
        }else if(width < 70){
            return('#FFA800');
        }else{
            return('#FF2E00');
        }
    }

    // Set up the correct colour for the progress bar
    useEffect(() => {
        // Set up the progress bar
        setWidth(props.progress);
        // Set the colour of the progress bar
        setColor(getColor(props.progress));

        Animated.timing(animatedWidth, {
            toValue: props.progress, // Update the animated with ref to the new progress value
            duration: 1000, 
            useNativeDriver: false, // Run on the native thread
        }).start();
    },[props.progress]);

    return (
    <View style={styles.parent}>
        <Animated.View style={[{width: animatedWidth.interpolate(
                                {
                                    inputRange: [0, 100],
                                    outputRange: ['0%', `100%`],
                                }), 
                    backgroundColor:color,
                    borderRadius:20}]}/>
    </View>
    );
}

const styles = StyleSheet.create({
    parent:{
        flexDirection: 'row',
        width:'95%',
        height:'30%',
        backgroundColor:'white',
        borderRadius:20
    }
})

