import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import PrimaryButton from "../../buttons/PrimaryButton"
import SecondaryButton from '../../buttons/SecondaryButton'
import {MaterialIcons} from "@expo/vector-icons"


function HospitalCard({name, location, onPress,navigation}) {
  return (
    <>
        <View style={[tw` rounded-lg flex flex-column h-35 justify-end`,
        {
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 6,
        },
        ]}>
            
        <TouchableOpacity
         onPress={() => navigation.navigate('Detailed Hospital')}
        >
          <MaterialIcons
                name='more-horiz'
                size={40}
                style={tw`absolute right-7 top-[-11]`}   
          />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={onPress}
        style={tw`pb-10 pl-4 pr-4 h-22 `
        }>
            <View style={tw`flex flex-row mt-5 rounded-lg  items-end justify-between`}>
              <View >
                  <Text style={tw`text-xl font-bold text-justify text-[#54C2B5]`}>{name}</Text>
                  <MaterialIcons
                    name="location-on"
                    size={35}
                    color="#54C2B5" 
                  /> 
              </View>
              
              <Text style={tw`text-4 text-justify font-semibold`}>{location}</Text>
            </View>
        </TouchableOpacity>
        </View>
    </>
  )
}

export default HospitalCard