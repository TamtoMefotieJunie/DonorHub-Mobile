import React from 'react'

import Notification from '../../screens/Notification'
import Hospital from '../Hospitals';
import { createStackNavigator } from '@react-navigation/stack'

import DetailHospital from "../../screens/DetailHospital"

import Localisation from '../../screens/Localisation'
import PaymentForm from '../../screens/PaymentForm';

const HospitalNavigation = ({navigation}) => {
    const Stack = createStackNavigator()
    const screenOptions = {headerShown: false}
  return (
    <>
     <Stack.Navigator>
      <Stack.Screen options={screenOptions} name='Hospital' component={Hospital} navigation={navigation}/>
      <Stack.Screen options={{
      headerTitle: "Hospital Location",
      headerTintColor: "#54C2B5",
      }} name='Localisation' component={Localisation} />
    <Stack.Screen options={{
      headerTitle: "Blood Inventory",
      headerTintColor: `#54C2B5`,
    }} name='Detailed Hospital' component={DetailHospital}
    />
    <Stack.Screen options={
      screenOptions
    } name='Payment' component={PaymentForm}/>
    <Stack.Screen name='Notification' component={Notification}/>
   
  </Stack.Navigator>
    
    </>
  )
}

export default HospitalNavigation