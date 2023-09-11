import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from "twrnc"
import HomeCard from '../cards/HomeCard'
import {MaterialIcons, Entypo} from "@expo/vector-icons"

function Home() {
  return (
    <>
    <View style={tw`p-4 `}>
      <Text style={tw`text-7 font-semibold`}>Good morning 
        <Text style={tw`font-bold text-[#0C3778]`}> Ange </Text></Text>
        <Image
          resizeMode="contain"
          style={tw`self-center mt-[-10%] h-90`} 
          source={require("../../../../assets/images/heart.png")}
        />
        <Text style={tw`text-6 font-semibold text-center`}>Your condition</Text>
         <HomeCard 
          cardTitle="Heart Rate"
          cardDesc="120 bpm"
          icon={<Entypo name="heart-outlined" size={45} style={tw`text-white`} />}
         />
        <HomeCard 
          cardTitle="Blood status"
          cardDesc="120/70"
          icon={<MaterialIcons name="healing" size={45} style={tw`text-white`} />}
         />
         <HomeCard 
          cardTitle="Blood glucose"
          cardDesc="120 bpm"
          icon={<MaterialIcons name="bar-chart" size={45} style={tw`text-white`} />}
         />
     </View>
    </>
  )
}

export default Home