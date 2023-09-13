/* eslint-disable */

import { faWifi } from '@fortawesome/free-solid-svg-icons';
import React, {useCallback, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,

} from 'react-native';


type progressBarProps = {
    progress:number
}

export function ProgressBar(props:progressBarProps): JSX.Element {

    // State variable to sotre how close the item is to expire
    const [width, setWidth] = useState<number>(props.progress);
    const [color, setColor] = useState<string>('#52FF00');

    const increaseWidth = useCallback(() => {
        const newWidth = width + 10;
        setWidth(newWidth%100);

        // Initialise the color of the bar
        setColor(getColor(width));
    }, [width]);

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

    // TODO
    // Define the function when integrating with database
    // The function is like the constructor for the progress bar
    const setUpBar = useEffect(() => {
        // Set the colour of the progress bar
        setColor(getColor(props.progress));
    },[]);

    return (
    <View style={styles.parent}>
        <View style={[{width: `${width}%`, 
                    backgroundColor:color,
                    borderRadius:20}]}></View>
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

