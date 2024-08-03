import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Donor from '../Donor'
import tw from "twrnc"
import DonorScreen from '../../screens/DonorScreen'

function DonorNavigation() {
    const Stack = createStackNavigator()
  return (
    <>
        <Stack.Navigator
         initialRouteName='Donor'
         screenOptions={{
            headerShown: true
         }}
        >
            <Stack.Screen 
             options={{
                headerShown: false,
             }}
            name='Donor' component={Donor} />
            <Stack.Screen name='DonorScreen' options={{
                headerShown: false
            }} component={DonorScreen} />
        </Stack.Navigator>
    </>
    )
}

export default DonorNavigation