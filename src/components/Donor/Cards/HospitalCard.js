import React from 'react'
import { FontAwesome5,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { View,Text, TouchableOpacity } from 'react-native'
import tw from "twrnc"

const HospitalCard = ({name, location, onMapPress,onDetailPress}) => {
  return (
    <>
    <View style={tw `flex flex-row items-center justify-center bg-white shadow-[#E5E5E5]/70 rounded-xl shadow-md mt-2 h-25`}>
            <View style={tw `w-[25%] h-[100%] items-center justify-center bg-[#54C2B5] rounded-md border-r-gray-400`}>
             <FontAwesome5 name="hospital-symbol" size={75} color="white" />
            </View>
            <View style={tw `bg-[#E5E5E5]/10 pl-2 w-[70%] h-full rounded-lg flex flex-row justify-between items-center`}>
                <View >
                    <Text style={tw`text-xl ml-2 font-bold text-justify text-[#54C2B5]`}>{name}</Text>
                    <View style={tw `bg-[#E5E5E5]/10 w-[90%] h-[50%] rounded-lg flex flex-row justify-start items-center`}>
                       <TouchableOpacity onPress={onMapPress}>
                            <MaterialCommunityIcons name="hospital-marker" size={24} color="#CF3304" />
                       </TouchableOpacity>
                        <Text style={tw`text-4 text-justify  font-semibold`}>{location}</Text>
                    </View>
                </View>                
                <TouchableOpacity onPress={onDetailPress}>
                    <MaterialIcons name="more-vert" size={40} color="black"/>
                </TouchableOpacity>
            </View>
    </View>
    </>
  )
}

export default HospitalCard