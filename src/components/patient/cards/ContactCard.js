import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"
import tw from "twrnc"

function ContactCard({image, name, lastMessage, numberUnRead, time, onPress}) {
  return (
    <>
       <View  style={tw`flex flex-row justify-between bg-gray-100 rounded-lg border-b-4 border-gray-300 p-2 items-center mt-2`}>
            <View style={tw ` rounded-full`}>
            { image}
            </View>
            <View style={tw`flex w-[85%] flex-row justify-between items-center`}>
                <View style={tw`flex flex-row w-[60%] ml-4 justify-between items-center`}>
                    <Text style={tw`text-lg font-semibold`}>{name}</Text>
                   
                </View>
                <View style={tw`flex flex-row w-[28%] justify-around items-center`}>
                <TouchableOpacity
                    onPress={onPress}
                   >
                    <MaterialIcons name="mark-chat-unread" size={24} color="#CF3304" />
                </TouchableOpacity>
                    <TouchableOpacity>
                     <MaterialIcons name="mark-email-unread" size={24} color="#CF3304" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text></Text>
            </View>
    </>
  )
}

export default ContactCard