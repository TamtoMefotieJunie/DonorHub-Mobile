import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"

function PrimaryButton({name, onPress}) {
  return (
    <>
      <View style={tw`mt-5`}>
        <TouchableOpacity
        onPress={onPress}
         style={tw`p-4 w-full bg-[#54C2B5]  group-hover:scale-100 group-hover:bg-white/30 relative overflow-hidden rounded-2xl text-lg font-bold text-white`}
        >
            <Text style={tw`text-white text-5 text-center font-bold`}>{name}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default PrimaryButton