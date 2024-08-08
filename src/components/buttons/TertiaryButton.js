import React from 'react'
import { Text,View,TouchableOpacity } from 'react-native'
import tw from "twrnc"
const TertiaryButton = ({name,onPress}) => {
  return (
    <View style={tw`mt-5`}>
    <TouchableOpacity
    onPress={onPress}
     style={tw`p-4 w-full rounded-5 mt-5 bg-[#CF3304] transition-all group-hover:scale-100 group-hover:bg-white/30 group relative overflow-hidden rounded-2xl text-lg font-bold text-white`}
    >
        <Text style={tw`text-white text-5 text-center font-bold`}>{name}</Text>
    </TouchableOpacity>
  </View>
  )
}

export default TertiaryButton