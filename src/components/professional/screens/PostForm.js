import React from 'react'
import { Image, ScrollView, TextInput } from 'react-native'
import { Text, View } from 'react-native'
import tw from "twrnc"
import {MaterialCommunityIcons, MaterialIcons} from "react-native-vector-icons"
import { TouchableOpacity } from 'react-native'

function Prescription() {
  return (
    <>
      <ScrollView>
        <View style={tw`p-4`}>
            <Image 
             source={require("../../../../assets/images/prescription.png")}
              resizeMode='contain'
              style={tw`w-100 self-center h-75`}
            />
            <View style={tw`rounded-10 w-full p-4 bg-gray-200 h-full`}>
              <View style={tw`bg-white flex flex-row justify-between mt-6 p-4 rounded-5 items-center`}>
              <MaterialIcons name="person" size={25} style={tw`text-gray-400`} />
              <TextInput 
               placeholder="Patient's Name"
               style={tw`w-90%`}
              />
              </View>
              <View style={tw`bg-white flex flex-row justify-between mt-5 p-4 rounded-5 items-center`}>
              <MaterialCommunityIcons name="pill" size={25} style={tw`text-gray-400`} />
              <TextInput 
               placeholder="Drug Name"
               style={tw`w-90%`}
              />
              </View>
              <View style={tw`bg-white flex flex-row justify-between items-center mt-5 rounded-5`}>
                  <View style={tw`bg-cyan-500 rounded-l-5 p-4`}>
                    <MaterialIcons name="add" style={tw`text-white`} size={30} />
                  </View>
                  <Text style={tw`text-5 text-gray-500 font-semibold`}>125mg</Text>
                  <View style={tw`rounded-r-5 bg-red-400 p-4`}>
                    <MaterialIcons name="remove" style={tw`text-white`} size={30} />
                  </View>
              </View>
              <View style={tw`bg-white flex flex-row justify-between mt-5 p-4 rounded-5 items-center`}>
              <MaterialCommunityIcons name="text" size={25} style={tw`text-gray-400`} />
              <TextInput 
               placeholder="Guideline"
               style={tw`w-90%`}
              />
              </View>
                <TouchableOpacity
                  style={tw`p-3 mt-5 bg-[#54C2B5] rounded-5`}>
                    <Text style={tw`text-white font-semibold text-center`}>Prescribe</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    </>
  )
}

export default Prescription