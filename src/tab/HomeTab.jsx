/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screen/Home';
import Cart from '../screen/Cart';
import Profile from '../screen/Profile';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  const keranjang = useSelector(state => state.cart.data);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#FF9843"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Card"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: keranjang.length,
          tabBarIcon: ({color}) => <Icon name="cart" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
