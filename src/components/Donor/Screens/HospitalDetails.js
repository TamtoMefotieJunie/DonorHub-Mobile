import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import tw from "twrnc";
import { useRoute } from '@react-navigation/native';
import PrimaryButton from '../../buttons/PrimaryButton';
import TertiaryButton from '../../buttons/TertiaryButton';

const HospitalDetails = ({navigation}) => {
  const route = useRoute();
  const { hospital } = route.params || {}; // Get the hospital data from route parameters

  return (
    <>
      <ImageBackground
        resizeMode='cover'
        source={require("../../../../assets/images/bgdonor.jpg")}
        style={tw`h-full p-3`}
        blurRadius={5}
      >
        <View style={tw`bg-[#ffffff]/40 border-2 rounded-5 border-white mt-20 h-[60%] p-4`}>
          
          <Text style={tw`text-2xl font-bold text-[#CF3304]`}>{hospital.name}</Text>
          <Text style={tw`text-lg font-400 mt-4`}><Text style={tw`text-xl font-semibold`} >Regurlar Days: </Text >{hospital.Days}</Text>
          <Text style={tw`text-lg font-400 mt-4`}><Text style={tw`text-xl font-semibold`} >Regurlar Time: </Text >{hospital.Time}</Text>
          <Text style={tw`text-lg font-400 mt-4`}><Text style={tw`text-xl font-semibold`} >Exceptional Days: </Text >{hospital.Exceptions}</Text>
          <Text style={tw`text-lg font-400 mt-4 mb-6`}><Text style={tw`text-xl font-semibold`} >Exceptional Time: </Text >{hospital.ExceptionTime}</Text>
          <TertiaryButton name="Book an Appointment"
          onPress={() => navigation.navigate("eligibilityCheck")}
          />

        </View>
      </ImageBackground>
    </>
  );
}

export default HospitalDetails;