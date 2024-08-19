import React from 'react';
import tw from "twrnc";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import ChatNavigation from '../../components/Donor/navigation/ChatNavigation';
import Home from '../../components/Donor/DrawerScreens/Home';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import Profile from '../../components/Donor/DrawerScreens/Profile';
import DonorDrawerContent from '../../components/Donor/Drawer/DonorDrawerContent';
import Post from '../../components/Donor/DrawerScreens/Post';
import History from '../../components/Donor/DrawerScreens/History';
import HospitalNavigation from '../../components/Donor/navigation/HospitalNavigation';
import HomeNavigation from '../../components/Donor/navigation/HomeNavigation';
import Notification from '../../components/Donor/Screens/DonorNotification';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Donor = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerTitle: "DonorHub",
          headerTintColor: "#FFFFFF",
          headerTitleStyle: tw`text-white`,
          headerStyle: tw`bg-[#54C2B5]`,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
              <MaterialIcons style={tw`text-white right-8`} name="notifications" size={30} />
            </TouchableOpacity>
          ),
        })}
        initialRouteName='Home'
        drawerContent={(props) => <DonorDrawerContent {...props} />}
      >
        <Drawer.Screen name='Home' component={HomeNavigation} />
        <Drawer.Screen name='Hospital' component={HospitalNavigation} />
        <Drawer.Screen name='Chat' component={ChatNavigation} />
        <Drawer.Screen name='History' component={History} />
        <Drawer.Screen name='Posts' component={Post} />
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Notification' component={Notification}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Donor;