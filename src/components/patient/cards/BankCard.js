import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import PrimaryButton from "../../buttons/PrimaryButton"
import SecondaryButton from '../../buttons/SecondaryButton'
import {MaterialIcons} from "@expo/vector-icons"


function HospitalCard({name, location, onPress,onPress1,navigation,price}) {
  return (
    <>
        <View style={[tw` rounded-lg flex flex-column h-35 mt-2 pl-2 pr-2 `,
        {
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 6,
        },
        ]}>
        <TouchableOpacity style={tw`flex flex-row rounded h-[37%]  pl-4 pr-4 bg-[#54C2B5] items-end justify-between`} onPress={onPress1} navigation={navigation}>
          <Text style={tw`text-xl font-bold text-center mb-2 text-[#ffffff]`}>{name}</Text>
          
            <MaterialIcons
                  name='more-horiz'
                  size={40}
                  color="white"
                  style={tw``}   
            />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={onPress}
        style={tw`mt-2 pl-4 pr-4 h-[54%] flex flex-row rounded-lg items-center justify-between`}> 
          <View >
            <MaterialIcons
              name="location-on"
              size={35}
              color="#CF3304" 
            /> 
            <Text style={tw`text-4 text-justify font-semibold`}>{location}</Text>
          </View>
          <Text style={tw`text-3.7 mt-9 font-bold text-[#CF3304]`}><Text style={tw`text-3.7 text-black`}>Price per Pack:</Text> {price}XFA </Text>
        </TouchableOpacity>
        </View>
    </>
  )
}

export default HospitalCard