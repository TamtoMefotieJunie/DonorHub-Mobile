import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'
import {MaterialIcons, FontAwesome, Entypo} from "@expo/vector-icons"
import { Drawer } from 'react-native-paper'
import tw from "twrnc"

function PatientDrawerContent(props) {
  return (
    <>
        <DrawerContentScrollView {...props} 
        style={tw`bg-white`}>
            {/* <View style={tw`p-4`}>
                <Text style={tw`text-10 font-bold  ml-5`}>iKare</Text>
            </View> */}
            <View style={tw`p-4 flex flex-col justify-between items-center`}>
                <MaterialIcons name="account-circle" size={150} style={tw`text-gray-700`} />
                <View>
                    <Text style={tw` text-center text-5 font-bold`}>Ange Sepdeu</Text>
                    <Text style={tw` text-center text-4`}>chriskameni25@gmail.com</Text>
                </View>
            </View>
              <Drawer.Section
              >
                <View>
                </View>
                <DrawerItem
                    label="Home"
                    labelStyle={tw`font-bold text-gray-700`}
                    icon={() => <MaterialIcons name="view-quilt" 
                    size={24} style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Home")}
                />
                <DrawerItem
                    label="Pharmacies"
                    labelStyle={tw` font-bold text-gray-700`}
                    icon={() => <MaterialIcons name="storefront" size={24} 
                    style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Pharmacies")}
                />
                <DrawerItem
                    label="Appointments"
                    labelStyle={tw` font-bold text-gray-700`}
                    icon={() => <MaterialIcons name="schedule" size={24} 
                    style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Appointments")}
                />
                <DrawerItem
                    label="Emergency"
                    labelStyle={tw` font-bold text-gray-700`}
                    icon={() => <MaterialIcons name="error-outline" size={24} 
                    style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Emergency")}
                />
                <DrawerItem
                    label="Chat"
                    labelStyle={tw`text-gray-700 font-bold`}
                    icon={() => <MaterialIcons name="chat" size={24} 
                    style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Chat")}
                />
                <DrawerItem
                    label="Profile"
                    labelStyle={tw`text-gray-700 font-bold`}
                    icon={() => <MaterialIcons name="account-circle" 
                    size={24} style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Profile")}
                />
                <DrawerItem
                    label="Log Out"
                    labelStyle={tw`text-gray-700 font-bold`}
                    icon={() => <MaterialIcons name="logout" 
                    size={24} style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate()}
                />

              </Drawer.Section>
        </DrawerContentScrollView>
    </>
    )
}

export default PatientDrawerContent