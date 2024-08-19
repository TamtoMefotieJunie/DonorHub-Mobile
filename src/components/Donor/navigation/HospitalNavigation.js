import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HospitalLocalisation from '../Screens/HospitalLocalisation';
import HospitalDetails from '../Screens/HospitalDetails';
import Appointment from '../Screens/Appointment';
import HospitalList from '../DrawerScreens/HospitalList';
import EligibleCard from '../Cards/EligibleCard';
import EligibilityForm from '../Screens/EligibilityForm';

const HospitalNavigation = ({navigation}) => {
    const Stack = createStackNavigator()
    const screenOptions = {headerShown: false}
  return (
    <>
     <Stack.Navigator>
      <Stack.Screen options={screenOptions} name='HospitalList' component={HospitalList} navigation={navigation}/>
      <Stack.Screen options={{
      headerTitle: "Hospital Location",
      headerTintColor: "#54C2B5",
      }} name='HospitalLocalisation' component={HospitalLocalisation} />
    <Stack.Screen options={{
      headerTitle: "Hospital Time Table",
      headerTintColor: `#54C2B5`,
    }} name='Hospital detail' component={HospitalDetails}
    />
    <Stack.Screen options={
      {
      headerTitle: "Appointment",
      headerTintColor: `#54C2B5`,
      }
    } name='appointment' component={Appointment}/>
     <Stack.Screen options={
      screenOptions
    } name='eligibilityCheck' component={EligibilityForm}/>
    <Stack.Screen options={screenOptions} name='successCard' component={EligibleCard}
    />
   
  </Stack.Navigator>
    
    </>
  )
}

export default HospitalNavigation