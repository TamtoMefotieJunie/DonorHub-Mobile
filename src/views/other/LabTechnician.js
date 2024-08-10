import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HealthProfessional from "./HealthProfessional"
import { Text, View } from 'react-native'
import tw from "twrnc"
import Prescription from '../../components/professional/screens/PostForm'
import Settings from "../../components/professional/screens/Posts"
import Profile from "../../components/professional/screens/Profile"
import Notification from '../../components/professional/screens/Notification'
import PersonalData from '../../components/professional/screens/PersonalData'

function ProfessionalStack({navigation}) {
    const Stack = createStackNavigator()
  return (
    <>
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Main Dashboard'
            >
                <Stack.Screen options={{
                    headerShown: false
                }} name="Main Dashboard" component={HealthProfessional}  navigation = {navigation}/>
                 <Stack.Screen 
                 options ={{
                  
                    headerTintColor: "#FFFFFF",
                    headerTitleStyle: tw `text-white`,
                    headerStyle: tw`bg-[#54C2B5]`,
                }}
                 name='Notification' component={Notification}/>
                
                <Stack.Screen 
                 options ={{
                  
                    headerTintColor: "#FFFFFF",
                    headerTitleStyle: tw `text-white`,
                    headerStyle: tw`bg-[#54C2B5]`,
                }}
                name='Personal Data' component={PersonalData}/>
                <Stack.Screen 
                options ={{
                  
                    headerTintColor: "#FFFFFF",
                    headerTitleStyle: tw `text-white`,
                    headerStyle: tw`bg-[#54C2B5]`,
                }}
                name='Settings' component={Settings}/>

            </Stack.Navigator>
        </NavigationContainer>
    </>
  )
}

export default ProfessionalStack