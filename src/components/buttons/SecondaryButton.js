import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"

function SecondaryButton({name,style, navigation}) {
    return (
      <>
        <View style={tw`mt-1 pl-2 pb-2 ${style}`}>
          <TouchableOpacity
          onPress = {() => navigation.navigate("Payment")}
           style={tw`p-2 w-[25%] rounded-3xl bg-[#CF3304] transition-all group-hover:scale-100 group-hover:bg-white/30 group relative overflow-hidden rounded-2xl text-lg font-bold text-white`}
          >
              <Text style={tw`text-white text-sm text-center font-bold`}>{name}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }

export default SecondaryButton