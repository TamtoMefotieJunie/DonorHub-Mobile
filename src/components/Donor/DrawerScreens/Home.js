import React from 'react'
import { Image, View,Text } from 'react-native'
import tw from "twrnc"
import HomeCard from '../Cards/HomeCard'

import {MaterialIcons,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons'
const Home = ({navigation}) => {
  return (
    <>
    <View>
        <Text style={tw `text-5 pt-3 pl-3 pb-2 font-bold`}>Welcome Back,<Text style={tw ` text-[#54C2B5]`}>Junie</Text></Text>
        <Image
        source={require('../../../../assets/images/donor home.jpg')}
        style = {tw `h-[47%] w-full`}
        // resizeMode='contain'
        blurRadius={0}
        />
        <HomeCard number={20} style="bg-white" style2="bg-[#C52A2F]" 
        icon={<MaterialIcons name="volunteer-activism" size={45} color="#C52A2F"/>}
        info="Number of Donations"
        />
        <HomeCard number="01" style="bg-white" style2="bg-[#54C2B5]" 
        icon={<SimpleLineIcons  name="badge" size={45} color="#54C2B5"/>}
        info="Get your badge here"
        arrow={<MaterialIcons name="navigate-next" size={40} color="#000000"  />}
        navigation={navigation}
        />
    </View>
    </>
  )
}

export default Home