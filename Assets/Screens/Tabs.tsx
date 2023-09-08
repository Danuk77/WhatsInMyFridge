/* eslint-disable */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kitchen from './Kitchen';
import ShoopingList from './ShoppingList';
import Settings from './Settings';

// Import the background icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUtensils, faShoppingCart, faCog} from "@fortawesome/free-solid-svg-icons"

import Header from './Header';

const Tab = createBottomTabNavigator();

export function Tabs() {
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
            options={{ tabBarIcon: ({ focused }) => focused ? <FontAwesomeIcon icon={faUtensils} color={'#818181'} size={29} /> : <FontAwesomeIcon icon={faUtensils} color={'#F1E3E4'} size={29} /> }}
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