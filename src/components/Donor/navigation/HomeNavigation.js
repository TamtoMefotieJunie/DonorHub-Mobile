import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../DrawerScreens/Home';
import Badge from '../Cards/Badge';

const HomeNavigation = () => {
  const stack = createStackNavigator();
  const screenOptions = {headerShown: false}
  return (
   <>
    <stack.Navigator>
        <stack.Screen options={screenOptions} name="Home" component={Home} />
        <stack.Screen options={screenOptions} name="badge" component={Badge} />

    </stack.Navigator>
   </>
  )
}

export default HomeNavigation