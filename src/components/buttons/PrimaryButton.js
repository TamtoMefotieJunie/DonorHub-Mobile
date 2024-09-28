import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

function PrimaryButton({ name, onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={tw`mt-5`}>
      <TouchableOpacity
        onPress={onPress}  // Use only the onPress prop here
        style={[
          tw`p-4 w-full rounded-5`,
          isPressed ? tw`bg-[#439D91]` : tw`bg-[#54C2B5]`,
        ]}
        activeOpacity={0.8}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Text style={tw`text-white text-5 text-center font-bold`}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PrimaryButton;
