/* eslint-disable */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kitchen from './Kitchen';
import ShoopingList from './ShoppingList';
import Settings from './Settings';
const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Kitchen" component={Kitchen} />
        <Tab.Screen name="ShoppingList" component={ShoopingList} />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}