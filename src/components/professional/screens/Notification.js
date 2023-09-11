import React from 'react'
import { Text, View } from 'react-native'
import tw from "twrnc"

function Notification() {
  return (
    <>
        <View style={tw`p-4`}>
            <Text style={tw`text-5`}>Notification</Text>
        </View>
    </>
  )
}

export default Notification