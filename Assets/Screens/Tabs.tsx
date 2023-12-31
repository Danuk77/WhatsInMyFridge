/* eslint-disable */
import React, {useMemo} from 'react';

// Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { loadUserData } from '../../redux/Actions';

// Types
import { userData } from '../../config/type';

import axios from 'axios';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kitchen from './Kitchen';
import ShoopingList from './ShoppingList';
import Settings from './Settings';

// Import the background icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUtensils, faShoppingCart, faCog} from "@fortawesome/free-solid-svg-icons"

import Header from './Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, "Main">;

const Tab = createBottomTabNavigator();

export const Tabs : React.FC<MainScreenProps> = (props) => {

    const dispatch = useDispatch();

    // Get the user's information when the app starts
    useMemo(() => {
    const fetchUserdata = async () => {
        try{
        // CHange this for production
        const response = await axios.get("http://127.0.0.1:8000/userInfo/newTest");
        const userData:userData = {
            name: response.data.body.User,
            fridge: response.data.body.Fridge,
            freezer: response.data.body.Freezer,
            shelf: response.data.body.Shelf,
            ShoppingList: response.data.body.shoppingList
        }

        dispatch(loadUserData(userData));

        }catch(err){
            console.log(err);
        }
    }
    fetchUserdata();

    },[]);

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#2E4FFF'
            },
            header: ({navigation, route, options}) => {
                return <Header/>
            },
        }}>
        <Tab.Screen name="Kitchen" 
            component={Kitchen} 
            options={{ tabBarIcon: ({ focused }) => focused ? <FontAwesomeIcon icon={faUtensils} color={'#818181'} size={29} /> : <FontAwesomeIcon icon={faUtensils} color={'#F1E3E4'} size={29} />}}
        />
        <Tab.Screen name="ShoppingList" 
            component={ShoopingList}
            options={{ tabBarIcon: ({ focused }) => focused ? <FontAwesomeIcon icon={faShoppingCart} color={'#818181'} size={29} /> : <FontAwesomeIcon icon={faShoppingCart} color={'#F1E3E4'} size={29} /> }} 
        />
        <Tab.Screen name="Settings"
            component={Settings} 
            options={{ tabBarIcon: ({ focused }) => focused ? <FontAwesomeIcon icon={faCog} color={'#818181'} size={29} /> : <FontAwesomeIcon icon={faCog} color={'#F1E3E4'} size={29} /> }}
        />
    </Tab.Navigator>
  );
}