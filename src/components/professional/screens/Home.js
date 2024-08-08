import React, {useState} from 'react'
import {Image, ImageBackground, Modal, Pressable, ScrollView, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import InfoCard from '../cards/InfoCard'
import { FontAwesome5 } from '@expo/vector-icons';

function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <> 
        <View style={tw`p-4`}>
            <View style={tw`flex flex-row justify-start items-center`}>
                 <View style={tw``}>  
                    <Text style={tw`text-5 font-semibold`}>Welcome
                    <Text style={tw`font-bold text-[#54C2B5]`}> Junie </Text></Text>       
                </View>
            </View>
            <View style={tw`mt-5 flex flex-row items-center justify-between w-full`}>
                <InfoCard 
                  info="patients"
                  number={50}
                  style="bg-[#bc143c] rounded-5 w-[47%] shadow-lg"
                />
                <InfoCard 
                  info="appointments"
                  number={10}
                  style="bg-teal-600 rounded-5 w-[47%] shadow-lg"
                />   
            </View>
                  <View style={tw`mt-5 flex flex-row items-center justify-between w-full`}>
                  <InfoCard 
                  info="Donors"
                  number={30}
                  style="bg-teal-600 rounded-5 w-[47%] shadow-lg"
                />
                   <InfoCard 
                  info="Transfusions"
                  number={10}
                  style="bg-[#bc143c] rounded-5 w-[47%] shadow-xl"
                />
                    
                </View>
                <View style={tw`mt-3`}>
                    
                    <View >
                      <Image source={require("../../../../assets/images/im6.jpeg")}
                      resizeMode='content'
                      style={tw `w-full rounded-lg h-65`}
                      />
                    </View>
                </View>
        </View>
 </>
  )
}

export default Home