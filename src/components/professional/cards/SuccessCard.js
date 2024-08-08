import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import tw, { style } from "twrnc"
import {MaterialIcons} from '@expo/vector-icons'

const SuccessCard = ({navigation}) => {
  return (
    <>
    <View style={tw`p-4 mt-8 w-full flex top-48`}>
      
              <View style={tw` flex ml-4 flex-col items-center rounded-lg justify-center  w-[90%] h-[60%] bg-white shadow-2xl  `}>
                <View style={tw`flex flex-col items-center p-2 w-20 h-20 justify-center rounded-full bg-green-100`}>
                    <MaterialIcons name="task-alt" size={44} color="green" />
                </View>
                  <Text style={tw`mt-4 text-6 font-semibold text-gray-500`}>Payment successful</Text>
                   <TouchableOpacity style={tw `bg-green-700 rounded-5 mt-4  text-center p-4`}
                        onPress={()=> navigation.navigate("Detailed Hospital")}
                    >
                        <Text style={tw `text-white text-lg font-semibold`}>Go back to main Page</Text>
                        
                    </TouchableOpacity>
                
              </View>
    </View>
      
    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
});

export default SuccessCard;