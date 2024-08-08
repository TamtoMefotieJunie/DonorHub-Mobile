import React from 'react'
import { Text, View } from 'react-native'
import tw from "twrnc"
import {MaterialIcons, Octicons} from "react-native-vector-icons"

function InfoCard({number, style, info}) {
  return (
    <>
        <View style={tw`p-4 rounded-4 ${style}`}>
            <View style={tw`flex flex-row justify-between items-center`}>
            <MaterialIcons name="query-stats" size={27} color="whitesmoke" />
                <Text style={tw`text-white text-4 font-semibold`}>{info}</Text>
            </View>
                <View style={tw`items-start`}>
                    <Text style={tw`text-12 text-white font-bold`}>{number}</Text>
                 
                </View>
        </View>
    </>
  )
}

export default InfoCard