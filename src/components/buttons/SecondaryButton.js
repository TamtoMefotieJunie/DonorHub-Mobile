import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"

function SecondaryButton({name, onPress}) {
    return (
      <>
        <View style={tw`mt-1 pl-2 pb-2`}>
          <TouchableOpacity
          onPress={onPress}
           style={tw`p-2 w-[25%] rounded-3xl bg-[#CF3304]`}
          >
              <Text style={tw`text-white text-sm text-center font-bold`}>{name}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }

export default SecondaryButton