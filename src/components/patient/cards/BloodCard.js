import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import SecondaryButton from '../../buttons/SecondaryButton'
import {MaterialIcons} from "@expo/vector-icons"

const BloodCard = ({type,component,quantity,group,onPress2, navigation}) => {
  return (
   <View style={tw `bg-gray-100 rounded-lg border-b-4 border-gray-300 shadow-md mt-3 `}>
        <View style={tw ` flex flex-row justify-around items-center h-10`}>
        <Text  style={tw `text-4 text-left`}>{type}</Text>
        <Text  style={tw `text-4  pr-5`}>{component}</Text>
        <Text  style={tw `text-4 pl-2`}>{quantity}</Text>
        <Text  style={tw `text-4 pl-2 font-bold`}>{group}</Text>  
    </View>
    <SecondaryButton name="Request" navigation={navigation} onPress={onPress2}/>
   </View>
    
  )
}

export default BloodCard