import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";


import PatientDrawerContent from '../../components/patient/drawer/PatientDrawerContent';
import Home from "../../components/patient/drawerScreens/Home";
import Profile from "../../components/patient/drawerScreens/Profile";
import DonorNavigation from '../../components/patient/drawerScreens/navigation/DonorNavigation';
import HospitalNavigation from '../../components/patient/drawerScreens/navigation/HospitalNavigation';
import Posts from '../../components/patient/drawerScreens/Posts';
import Notification from '../../components/patient/screens/Notification';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';



function Patient({navigation}) {
    const Drawer = createDrawerNavigator()
    const Stack = createNativeStackNavigator();
  return (
    <>
    
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
                    <TouchableOpacity
                      onPress = { () => navigation.navigate("Notification")}>
                        <MaterialIcons 
                        style={tw`text-white right-8`}
                        name="notifications" size={30} />
                      </TouchableOpacity> 
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
            
            
        </Drawer.Navigator>
        {/* <Stack.Navigator
          initialRouteName='RegisterScreen'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
          <Stack.Screen name='Notification' component={Notification} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator> */}
  
    </>
  )
}

export default Patient