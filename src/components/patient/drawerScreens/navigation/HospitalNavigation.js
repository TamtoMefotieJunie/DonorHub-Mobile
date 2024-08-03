import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Hospital from '../Hospitals'
import tw from "twrnc"
import DetailHospital from "../../screens/DetailHospital"
import Localisation from '../../screens/Localisation'

function HospitalNavigation({navigation}) {
    const Stack = createStackNavigator()
    const screenOptions = {headerShown: false}
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={screenOptions} name='Hospital' component={Hospital} navigation={navigation}/>
        <Stack.Screen options={{
          headerTitle: "Hospital Location",
          headerTintColor: `#54C2B5`,
        }} name='Localisation' component={Localisation} />

        <Stack.Screen options={{
          headerTitle: "Blood Inventory",
          headerTintColor: `#54C2B5`,
        }} name='Detailed Hospital' component={DetailHospital}
        />
       
      </Stack.Navigator>
    </>
  )
}

export default HospitalNavigation
