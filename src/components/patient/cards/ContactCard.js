import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"
import tw from "twrnc"
import SecondaryButton from '../../buttons/SecondaryButton'
import TertiaryButton from '../../buttons/TertiaryButton'

function ContactCard({image, name,  onPress}) {
  return (
    <>
    <TouchableOpacity onPress={onPress}>
       <View  style={tw`flex bg-white/70 flex-row justify-around border-b-8 border-gray-300 p-2 items-center mt-2`}>
            <View style={tw ` bg-red-200 border-white border-2 rounded-full`}>
            { image}
            </View>
              <View style={tw`flex flex-row w-[50%] ml-4 justify-between items-center`}>
                <Text style={tw`text-lg font-semibold`}>{name}</Text>
                   
              </View>
                
            
            <MaterialIcons name="more-horiz" size={30} color="gray" />
        </View>
        </TouchableOpacity>

    </>
  )
}

export default ContactCard