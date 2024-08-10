import React ,{useState} from 'react'
import { View,Text,Image } from 'react-native'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"

import SecondaryButton from '../../buttons/SecondaryButton'
import TertiaryButton from '../../buttons/TertiaryButton'
import { Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Profile({navigation}) {
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);

  return (
    <>
    <View style={tw `bg-gray-200 h-full`}>
      <View style={[tw `bg-[#54C2B5] h-[25%] relative p-4 rounded-b-11`]}>
          <View style={tw `rounded-full w-[50%] h-[100%] top-15  self-center`}>
                <Image 
                resizeMethod='contain'
                style={tw `rounded-full w-[100%] h-[120%] border-2 border-white`}
                source={require("../../../../assets/images/profile.png")}/>
          </View>
        </View>
        <View style={tw `p-4 mt-19`}>
            <View style={tw `flex flex-row mt-8 w-full h-[25%] items-center justify-between`}>
                <View style={tw `rounded-full top-15 w-[24%] h-[90%] self-start top-[-10]`}>
                  <Image 
                  resizeMethod='contain'
                  style={tw `rounded-full w-[100%] h-[120%] border-2 border-white`}
                  source={require("../../../../assets/images/logo3.png")}/>
                </View>
                <View style={tw `rounded-full w-[24%] h-[90%]  top-15  self-start top-[-10]`}>
                  <Image 
                  resizeMethod='contain'
                  style={tw `rounded-full w-[100%] h-[120%] border-2 border-white`}
                  source={require("../../../../assets/images/bg4.jpeg")}/>
                </View>
            </View>

            <TouchableOpacity
            style={[
              tw`w-[90%] h-17 pt-4 self-center rounded-10`,
              isPressed1 ? tw`bg-[#F29090]` : tw`bg-white`,
            ]}
            activeOpacity={0.6}
            onPressIn={() => setIsPressed1(true)}
            onPressOut={() => setIsPressed1(false)}
            onPress={() => navigation.navigate("Personal Data")}
          >
            <Text style={tw`text-center text-5 font-bold ${isPressed1 ? 'text-white' : 'text-black'}`}>
              Personal data
            </Text>
          </TouchableOpacity>

          {/* Button 2 */}
          <TouchableOpacity
            style={[
              tw`w-[90%] h-17 pt-4 mt-5 self-center rounded-10`,
              isPressed2 ? tw`bg-[#F29090]` : tw`bg-white`,
            ]}
            activeOpacity={0.6}
            onPressIn={() => setIsPressed2(true)}
            onPressOut={() => setIsPressed2(false)}
          >
            <Text style={tw`text-center text-5 font-bold ${isPressed2 ? 'text-white' : 'text-black'}`}>
              Account settings
            </Text>
          </TouchableOpacity>
    
        </View>
    </View>
    </>
  )
}

export default Profile