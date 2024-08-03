import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import tw from "twrnc"
import PatientDrawerContent from '../../components/patient/drawer/PatientDrawerContent'
import Home from "../../components/patient/drawerScreens/Home"
import Profile from "../../components/patient/drawerScreens/Profile"
import { StatusBar } from 'expo-status-bar'
import {MaterialIcons} from "@expo/vector-icons"
import AppointmentNavigation from '../../components/patient/drawerScreens/navigation/AppointmentNavigation'
import DonorNavigation from '../../components/patient/drawerScreens/navigation/DonorNavigation'
import HospitalNavigation from '../../components/patient/drawerScreens/navigation/HospitalNavigation'
import Posts from '../../components/patient/drawerScreens/Posts'


function Patient() {
    const Drawer = createDrawerNavigator()
  return (
    <>
    <NavigationContainer>
        <StatusBar style="light" />
        <Drawer.Navigator
          screenOptions={{
            headerTitle: "DonorHub",
            headerTintColor: "#FFFFFF",
            headerTitleStyle: tw `text-white`,
            headerStyle: tw`bg-[#54C2B5]`,
            headerRight: () => {
                return (
                    <>
                        <MaterialIcons 
                         style={tw`text-white right-8`}
                        name="notifications" size={30} />
                    </>
                )
            }
          }}
          
          initialRouteName='Home'
          drawerContent={(props) => <PatientDrawerContent {...props} />}
        >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Hospitals' component={HospitalNavigation} />
            <Drawer.Screen name='Potential Donors' component={DonorNavigation} />
            <Drawer.Screen name='Posts' component={Posts} />
            <Drawer.Screen name='Profile' component={Profile} />
            {/* <Drawer.Screen name='Posts' component={AppointmentNavigation} /> */}
        </Drawer.Navigator>
    </NavigationContainer>
    </>
  )
}

export default Patient