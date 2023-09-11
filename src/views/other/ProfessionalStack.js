import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HealthProfessional from "./HealthProfessional"
import { Text, View } from 'react-native'
import tw from "twrnc"
import Prescription from '../../components/professional/screens/Prescription'
import Settings from "../../components/professional/screens/Settings"
import Profile from "../../components/professional/screens/Profile"

function ProfessionalStack() {
    const Stack = createStackNavigator()
  return (
    <>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerShown: false
                }} name="Main Dashboard" component={HealthProfessional} />
                <Stack.Screen
                 options={{
                    headerTitle: "Issue a prescription",
                    headerTintColor: "#fff",
                    headerStyle: tw`bg-[#0C3778]`
                 }} 
                name="Prescription" 
                component={Prescription} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  )
}

export default ProfessionalStack