import React from 'react'
import { Image, View,Text, TouchableOpacity } from 'react-native'
import tw from "twrnc"
import {MaterialIcons, Octicons} from "react-native-vector-icons"



const HomeCard = ({number,style,icon,style2,info,arrow,navigation}) => {
    
  return (
    <>
    <View style={tw`p-4 mt-2 ml-3 mr-3 border border-[#E9D0D0]/30 border-4 rounded-4 ${style}`}>
         <View style={tw `self-end rounded-tr-4 rounded-bl-4 absolute ${style2} h-5 w-[50%]`}></View>
            <View style={tw`flex flex-row justify-between items-center`}>
                {icon}
            </View>
                <View style={tw`items-center justify-between flex flex-row`}>
                    <Text style={tw`text-10 text-gray-500 font-bold`}>{number}</Text>
                    <View style={tw`items-center justify-around flex flex-row`}>
                        <Text style={tw`text-gray-500 text-5 font-semibold`}>{info}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("badge")}>
                            {arrow}
                        </TouchableOpacity>
                    </View>
                </View>
                
        </View>
    
    </>
  )
}



export default HomeCard