import React ,{useState} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"

function CallDecision({name, onPress, style}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    
    <>
    <View style={tw`mt-1 pl-2 pb-2 ${style}`}>
          <TouchableOpacity
          onPress={onPress}
           
           style={[
            tw`p-2 w-[25%] rounded-3xl bg-[#CF3304]`,
            isPressed ? tw`bg-[#F29090]` : tw` bg-[#CF3304]`,
          ]}
          activeOpacity={0.4}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          >
              <Text style={[tw`text-white text-sm text-center font-bold`,isPressed ? tw`text-gray-700` : tw`text-white`]}
              
              >{name}</Text>
          </TouchableOpacity>
        </View>
        
    </>
  )
}

export default CallDecision