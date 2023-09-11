import React from 'react'
import { Text, View } from 'react-native'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"

function MessageCard({incoming, message, time, isSeen}) {
  return (
    <>
        { incoming ?
            <View style={tw`flex flex-row justify-between items-center mt-2`}> 
            <View style={tw`p-4 rounded-5 bg-gray-800 max-w-[70%]`}>
                <Text style={tw`text-white`}>{message}</Text>
                <Text style={tw`text-right mt-2 text-gray-500`}>{time}</Text>
            </View>
            <View></View>
            </View>
            :
            <View style={tw`flex flex-row justify-between items-center mt-2`}>  
            <View></View>
            <View style={tw`p-4 rounded-5 bg-[#0C3778] max-w-[70%]`}>
                <Text style={tw`text-white`}>{message}</Text>
                <View style={tw`mt-2 flex flex-row items-center self-end`}>
                    <Text style={tw`text-gray-500 text-3`}>{time}</Text>
                    <MaterialIcons name="check" size={24} style={tw`text-gray-500`} />
                </View>
            </View>
            </View>
        }
        
    </>
  )
}

export default MessageCard