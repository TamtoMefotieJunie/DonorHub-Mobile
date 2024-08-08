import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import Home from "../../components/professional/screens/Home";
import Appointment from "../../components/professional/screens/Appointment";
import { Ionicons } from '@expo/vector-icons';
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "react-native-vector-icons";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import Laboratory from "../../components/professional/screens/Laboratory";
import ChatNavigation from "../../components/professional/navigation/ChatNavigation";
import Posts from "../../components/professional/screens/Posts";
import { TouchableOpacity } from "react-native-gesture-handler";
import Profile from "../../components/professional/screens/Profile";

function HealthProfessional({navigation}) {
  const Bottom = createBottomTabNavigator();
  const [hospital, setHospital] = useState("CHU-Yaounde");
  return (
    <>
      <StatusBar style="light" />
        <Bottom.Navigator>
          <Bottom.Screen
            options={{
              headerShown: true,
              headerStyle: tw`bg-[#54C2B5]`,
              headerTintColor: "#FFFFFF",
              headerTitle: hospital,
              tabBarLabel: "Home",
              tabBarLabelStyle: tw`font-bold`,
              tabBarActiveTintColor: `#54C2B5`,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" color={color} size={size} />
              ),
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
            name="Home"
            component={Home}
          />
          <Bottom.Screen
            name="Appointments"
            component={Appointment}
            options={{
              headerStyle: tw`bg-[#54C2B5]`,
              headerTintColor: "#FFFFFF",
              tabBarLabelStyle: tw`font-bold`,
              tabBarActiveTintColor: `#54C2B5`,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  color={color}
                  size={size}
                  name="calendar-clock"
                />
              ),
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
          />
          <Bottom.Screen
            name="Laboratory"
            component={Laboratory}
            options={{
              headerStyle: tw`bg-[#54C2B5]`,
              headerTintColor: "#FFFFFF",
              tabBarLabelStyle: tw`font-bold`,
             
              tabBarActiveTintColor: `#54C2B5`,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="store" color={color} size={size} />
              ),
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
          />
          <Bottom.Screen
            name="Profile"
            component={Profile}
            options={{
              headerStyle: tw`bg-[#54C2B5]`,
              headerTintColor: "#FFFFFF",
              tabBarLabelStyle: tw`font-bold`,
              tabBarActiveTintColor: `#54C2B5`,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-circle" size={size} color={color} />
              ),
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
          />
          <Bottom.Screen
            name="Post"
            component={Posts}
            options={{
              headerStyle: tw`bg-[#54C2B5]`,
              headerTintColor: "#FFFFFF",
              
              tabBarLabelStyle: tw`font-bold`,
              tabBarActiveTintColor: `#54C2B5`,
              tabBarIcon: ({ color, size }) => (
              
                  <MaterialIcons
                    name="post-add"
                    color={color}
                    size={size}
                  />
               
              ),
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
          />
        </Bottom.Navigator>
    </>
  );
}

export default HealthProfessional;
