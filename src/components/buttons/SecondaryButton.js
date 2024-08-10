import React,{useState} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"

function SecondaryButton({name,style, navigation}) {
  const [isPressed, setIsPressed] = useState(false);

    return (
      <>
        <View style={tw`mt-1 pl-2 pb-2 ${style}`}>
          <TouchableOpacity
          onPress = {() => navigation.navigate("Payment")}
           style={[
            tw`p-2 w-[25%] rounded-3xl font-bold `,
            isPressed ? tw`bg-[#54C2B5]` : tw` bg-[#CF3304]`,
          ]}
          activeOpacity={0.8}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          >
              <Text style={[tw`text-sm text-center font-bold`,isPressed? tw `text-white` : tw `text-white`]}>{name}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }

export default SecondaryButton