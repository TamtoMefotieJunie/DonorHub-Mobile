import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import tw, { style } from "twrnc"
import {MaterialIcons} from '@expo/vector-icons'

const EligibleCard = ({navigation,onPress}) => {
  return (
    <>
    <View style={tw`w-full p-4 h-full flex flex-row items-center justify-center`}>
        <View style={tw` flex flex-col items-center rounded-lg justify-center w-full h-[40%]  bg-white shadow-2xl  `}>
          <View style={tw`flex flex-col items-center p-2 w-20 h-20 justify-center rounded-full bg-green-100`}>
              <MaterialIcons name="task-alt" size={44} color="green" />
          </View>
            <Text style={tw`mt-4 text-2xl font-semibold text-gray-500`}>You are Eligible</Text>
              <TouchableOpacity style={tw `bg-green-700 rounded-5 h-15 mt-4 text-center p-4`}
                  onPress={() => navigation.navigate("appointment")}
              >
                  <Text style={tw `text-white text-lg font-semibold`}>Go to next Page</Text>
                  
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

export default EligibleCard;