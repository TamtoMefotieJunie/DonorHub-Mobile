import React from 'react'
import { Text, View,TextInput,TouchableOpacity } from 'react-native'
import tw from "twrnc"
import {MaterialIcons } from "@expo/vector-icons"

const PatientCard = ({image, name, lastMessage, numberUnRead, time, onPress}) => {
  return (
    <>
        <TouchableOpacity
         onPress={onPress}
        style={tw`flex flex-row justify-between border-b border-gray-300 p-2 items-center mt-2`}>
            {
                image
            }
            <View style={tw`flex w-[85%] flex-col justify-between items-center`}>
                <View style={tw`flex flex-row w-[92%] justify-between items-center`}>
                    <Text style={tw`text-5 font-bold`}>{name}</Text>
                    <Text style={tw`bg-[#54C2B5] text-white text-center justify-center mr-3 p-2 rounded-20 w-8 h-8`}>{numberUnRead}</Text>
                </View>
                <View style={tw`flex flex-row w-[92%] justify-between pr-3 items-center`}>
                    <Text style={tw`text-3 font-semibold`}>{lastMessage}</Text>
                    <Text style={tw`text-3 font-bold text-[#54C2B5]`}>{time}</Text>
                </View>
            </View>
            <Text></Text>
        </TouchableOpacity>
    </>
  )
}

export default PatientCard