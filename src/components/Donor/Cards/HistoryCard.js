import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import tw from "twrnc"
import Text from '../../DefaultText'
const HistoryCard = ({Date,type,qty,center}) => {
  return (
   <>
   <View style={tw `bg-gray-100 rounded-lg border-b-4 border-gray-300 shadow-md mt-3 `}>
        <View style={tw ` flex flex-row justify-around items-center h-10`}>
            <Text  style={tw `text-4 text-left`} bold>{center}</Text>
            <Text  style={tw `text-4 text-left`}>{type}</Text>
            <Text  style={tw `text-4  text-left`}>{qty}</Text>
            <Text  style={tw `text-4 text-center pl-2 `}>{Date}</Text>  
        </View>
    </View>
   </>
  )
}

export default HistoryCard