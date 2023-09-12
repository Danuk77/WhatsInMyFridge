/* eslint-disable */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';

type addOptionsProps = {
    icon:IconDefinition,
    option:string,
    onCall:() => void
}

export function AddOptions(props: addOptionsProps): React.JSX.Element {

    return(
        <View style={{width:'80%' ,justifyContent:'center', backgroundColor: 'white', borderRadius:5, height: '15%', margin: '4%'}}>
            <TouchableOpacity
                onPress={props.onCall}>
                    <View style={{flexDirection:'row', paddingLeft:'5%'}}>
                        <FontAwesomeIcon size={23} icon={props.icon} color='black'/>
                        <Text style={{paddingLeft:'5%', fontSize: 16}}>{props.option}</Text>
                    </View>
            </TouchableOpacity>     
        </View>
    );
    
}

const styles = StyleSheet.create({
    
})