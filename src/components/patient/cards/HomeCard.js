import React from 'react'
import { Text, View } from 'react-native'
import tw, { style } from "twrnc"

const HomeCard = ({ icon, borderWidth, borderColor, cardDesc, cardTitle, number }) => {
  const dynamicStyles = {
    borderWidth: borderWidth,
    borderColor: borderColor,
  };
  return (
    <>
        <View style={[tw`h-[20%] mt-5 flex flex-column shadow-xl items-left pt-2 rounded-4 bg-[#E5E5E5]`]}>
              <View style={tw`flex flex-row items-center justify-around border-box `}>
                {icon}
                <Text style={tw`text-5 font-bold ml-15 text-justify text-[#54C2B5]`}>{cardTitle}</Text>
              </View>
            <View style={tw`flex flex-row items-center justify-around border-box h-15 align-center`}>
              
                <Text style={tw`text-4 font-semibold text-justify text-lg`}>{cardDesc}</Text>
                <Text style={tw`text-5 font-bold text-justify text-[#54C2B5]`}>{number}</Text>
            </View>
        </View>
    </>
  )
}

export default HomeCard