import React from 'react'
import { Image, Text, View } from 'react-native'
import tw from "twrnc"
import HomeCard from '../cards/HomeCard'
import {MaterialIcons, Entypo} from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/FontAwesome5';


function Home() {
  return (
    <>
    <View style={tw`p-4 `}>
      <Text style={tw`text-7 font-semibold`}>Welcome
        <Text style={tw`font-bold text-[#54C2B5]`}> Junie </Text></Text>
        <Image
          resizeMode="contain"
          
          style={tw`self-center w-full mt-[-16%] h-90`} 
          source={require("../../../../assets/images/bg3.jpeg")}
        />
        <HomeCard
          icon={
            <MaterialIcons name="bloodtype" size={50} color="#CF3304" />
          }
        
          borderWidth={1}
          borderColor="red"
          cardDesc="number of ordered packs"
          cardTitle="Blood Pack"
          number="20"
        />
        <HomeCard icon={<Icon name="hand-holding-heart" size={40} color="#CF3304" />}
        cardDesc="number of potential Donors"
        cardTitle=" Potential Donors"
        number="20"
        />
      
        
     </View>
    </>
  )
}

export default Home