import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import Home from "../../components/professional/screens/Home";
import Appointment from "../../components/professional/screens/Appointment";
import Notification from "../../components/professional/screens/Notification";
import Chat from "../../components/professional/screens/Chat";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "react-native-vector-icons";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import Laboratory from "../../components/professional/screens/Laboratory";
import ChatNavigation from "../../components/professional/navigation/ChatNavigation";

function HealthProfessional() {
  const Bottom = createBottomTabNavigator();
  const [hospital, setHospital] = useState("ODZA District Hospital");
  return (
    <>
      <StatusBar style="light" />
        <Bottom.Navigator>
          <Bottom.Screen
            options={{
              // headerShown: false,
              headerStyle: tw`bg-[#0C3778]`,
              headerTintColor: "#FFFFFF",
              headerTitle: hospital,
              tabBarLabel: "Home",
              tabBarLabelStyle: tw`font-bold`,
              tabBarActiveTintColor: `#0C3778`,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" color={color} size={size} />
              ),
            }}
            name="Home"
            component={Home}
          />
          <Bottom.Screen
            name="Appointments"
            component={Appointment}
            options={{
              headerStyle: tw`bg-[#0C3778]`,
              headerTintColor: "#FFFFFF",
              tabBarLabelStyle: tw`font-bold`,
              tabBarActiveTintColor: `#0C3778`,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  color={color}
                  size={size}
                  name="calendar-clock"
                />
              ),
            }}
          />
          <Bottom.Screen
            name="Laboratory"
            component={Laboratory}
            options={{
              headerStyle: tw`bg-[#0C3778]`,
              headerTintColor: "#FFFFFF",
              tabBarLabelStyle: tw`font-bold`,
              tabBarActiveTintColor: `#0C3778`,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="store" color={color} size={size} />
              ),
            }}
          />
          <Bottom.Screen
            name="Chat"
            component={ChatNavigation}
            options={{
              headerStyle: tw`bg-[#0C3778]`,
              headerTintColor: "#FFFFFF",
              tabBarBadge: 4,
              tabBarLabelStyle: tw`font-bold`,
              tabBarActiveTintColor: `#0C3778`,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="comment-multiple-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Bottom.Screen
            name="Notification"
            component={Notification}
            options={{
              headerStyle: tw`bg-[#0C3778]`,
              headerTintColor: "#FFFFFF",
              tabBarBadge: 2,
              tabBarLabelStyle: tw`font-bold`,
              tabBarActiveTintColor: `#0C3778`,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="notifications-none"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Bottom.Navigator>
    </>
  );
}

export default HealthProfessional;
