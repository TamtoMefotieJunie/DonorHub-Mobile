import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import { Text, View ,Image} from 'react-native'
import {MaterialIcons, FontAwesome, Entypo} from "@expo/vector-icons"
import { Drawer } from 'react-native-paper'
import tw from "twrnc"
import { useState } from 'react'


const DonorDrawerContent = (props) => {
 
  return (
    <>
     <DrawerContentScrollView {...props} 
        style={tw`bg-white`}>
           <View style={tw`p-4 flex flex-col justify-between items-center`}>
              <View style={tw`rounded-full w-35 h-35 bg-[#E5E5E5] justify-center`}>
              <Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-full w-full rounded-full`}/>
              </View>
                
              <View>
                  <Text style={tw` text-center text-5 font-bold`}>Tamto Junie</Text>
                  <Text style={tw` text-center text-4`}>juniemefotie91@gmail.com</Text>
              </View>
            </View>
            <Drawer.Section>
                <DrawerItem
                    label="Home"
                    labelStyle={tw`font-bold text-gray-700`}
                    icon={() => <MaterialIcons name="view-quilt" 
                    size={24} style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Home")}
                />
                <DrawerItem
                    label="Hospitals"
                    labelStyle={tw` font-bold text-gray-700`}
                    icon={() => <MaterialIcons name="local-hospital" size={24} 
                    style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Hospital")}
                /> 
                <DrawerItem
                    label="Chat"
                    labelStyle={tw` font-bold text-gray-700`}
                    icon={() => <MaterialIcons name="person-add" size={24} 
                    style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Chat")}
                />
                 <DrawerItem
                    label="History"
                    labelStyle={tw` font-bold text-gray-700`}
                    icon={() => <MaterialIcons name="work-history" size={24} 
                    style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("History")}
                />
                <DrawerItem
                    label="Posts"
                    labelStyle={tw`text-gray-700 font-bold`}
                    icon={() => <MaterialIcons name="post-add" size={24} 
                    style={tw`text-gray-700`} />}
                    onPress={() => props.navigation.navigate("Posts")}
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

export default DonorDrawerContent