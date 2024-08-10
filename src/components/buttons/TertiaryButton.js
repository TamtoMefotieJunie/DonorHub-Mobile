import React,{useState} from 'react'
import { Text,View,TouchableOpacity } from 'react-native'
import tw from "twrnc"
const TertiaryButton = ({name,onPress}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={tw``}>
    <TouchableOpacity
    onPress={onPress}
     style={[
      tw`p-4 w-full rounded-5 mt-5 bg-[#CF3304] `,
      isPressed ? tw`bg-[#FE3A3B]` : tw` bg-[#CF3304]`,
    ]}
    activeOpacity={0.8}
    onPressIn={() => setIsPressed(true)}
    onPressOut={() => setIsPressed(false)}
    >
        <Text style={[tw`text-5 text-center font-bold`,isPressed? tw `text-white` : tw `text-white`]}>{name}</Text>
    </TouchableOpacity>
  </View>
  )
}

export default TertiaryButton