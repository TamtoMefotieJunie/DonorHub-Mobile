import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import tw from "twrnc"
import Text from '../../DefaultText'
import HistoryCard from '../Cards/HistoryCard'


const History = () => {
  return (
    <>
      <View style={tw`p-4`}>
        <Image
        resizeMode='inherit'
        style={tw `w-full h-[27%]`}
        source={require("../../../../assets/images/thanks.jpg")}
        />
       <Text style={tw `text-xl text-justify text-[#54C2B5] mt-2`} bold>Your History</Text>
       <View style={tw `h-[90%] bg-white rounded-lg pt-3 mt-2`}>
          <View style={tw `flex flex-row items-center justify-evenly`}>
            <Text  style={tw `text-4 font-semibold text-left`} bold>Center</Text>
            <Text  style={tw `text-4 font-semibold border-l-2 pl-2 text-right border-gray-300`} bold>Type</Text>
            <Text  style={tw `text-4  border-l-2 pl-2 text-right border-gray-300`} bold>Quantity</Text>
            <Text  style={tw `text-4  border-l-2 pl-8 text-left border-gray-300`} bold>Date</Text>
          </View>
          <View style={tw`h-[50%] p-2`}>
            <ScrollView showsVerticalScrollIndicator={false} >
              <HistoryCard Date="13/08/2024" type="Simple" qty="2" center="CHU"/>
              <HistoryCard Date="13/08/2024" type="Simple" qty="2" center="CHU"/>
              <HistoryCard Date="13/08/2024" type="Simple" qty="2" center="CHU"/>
              <HistoryCard Date="13/08/2024" type="Simple" qty="2" center="CHU"/>
              <HistoryCard Date="13/08/2024" type="Simple" qty="2" center="CHU"/>
              <HistoryCard Date="13/08/2024" type="Simple" qty="2" center="CHU"/>
            </ScrollView>
          </View>

         
       </View>
      </View>
    </>
  )
}

export default History