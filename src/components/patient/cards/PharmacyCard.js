import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import PrimaryButton from "../../buttons/PrimaryButton"
import SecondaryButton from '../../buttons/SecondaryButton'
import {MaterialIcons} from "@expo/vector-icons"

function PharmacyCard({name, location, onPress}) {
  return (
    <>
        <TouchableOpacity 
        onPress={onPress}
        style={tw`p-4 mt-2 border-b-2 border-gray-300`}>
            <View style={tw`flex flex-row items-center justify-between`}>
              <View>
                <Text style={tw`text-8 font-bold text-[#0C3778]`}>{name}</Text>
                <Text style={tw`text-4 font-semibold`}>{location}</Text>
                </View>
                 <MaterialIcons
                   name="location-pin"
                   size={60}
                   style={tw`text-[#0C3778]`}
                 />
            </View>
        </TouchableOpacity>
    </>
  )
}

export default PharmacyCard