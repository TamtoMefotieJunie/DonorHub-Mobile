import React, { useState } from 'react'
import { View,Text,TouchableOpacity, ScrollView } from 'react-native'
import tw from 'twrnc';
import { MaterialCommunityIcons,MaterialIcons } from 'react-native-vector-icons';
import FormInput from '../../inputs/FormInput';
import PrimaryButton from '../../buttons/PrimaryButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import TertiaryButton from '../../buttons/TertiaryButton';

const EligibilityForm = ({navigation}) => {
    const [eligibilityCheck,setEligibilityCheck] = useState(false);

    const handleValidEligibility = () => {
        navigation.navigate("successCard")
    }
  return (
   <>
   <View style={tw`p-4 bg-[#e5e5e5]/70 h-full flex flex-row items-center justify-center`}>
        <View style={tw`bg-white shadow-2xl w-full h-[100%] pt-8 pl-5 pr-5 pb-6 rounded-5`}>
          <Text style={tw`text-[#CF3304] text-xl text-center font-bold`}>
            CHECK YOUR ELIGIBILITY
          </Text>
         <ScrollView showsVerticalScrollIndicator={false}>
            <FormInput
              placeholder="last donation date"
              type="text"
              editable={false} 
              name="date"
              icon={<MaterialCommunityIcons name="calendar" size={24} color="black" style={tw`text-[#8B8989]`} />}
            />
          <FormInput
            placeholder="Age"
            type="numeric"
            name="age"
            icon={<MaterialCommunityIcons name="clock" size={24} color="gray" />}
          />
           <FormInput
            placeholder="Gender"
            type="text"
            name="gender"
            icon={<MaterialCommunityIcons name="gender-female" size={24} color="gray" />}
          />
          <FormInput
            placeholder="Weight"
            type="numeric"
            name="weight"
            icon={<MaterialCommunityIcons name="weight-gram" size={24} color="gray" />}
          />
          <FormInput
            placeholder="Blood pressure"
            type="numeric"
            name="pressure"
            icon={<MaterialIcons name="compress" size={24} color="gray" />}
          />
          <FormInput
            placeholder="Pulse"
            type="numeric"
            name="pulse"
            icon={<MaterialCommunityIcons name="pulse" size={24} color="gray" />}
          />
          <FormInput
            placeholder="Haemoglobin"
            type="numeric"
            name="Hb"
            icon={<MaterialCommunityIcons name="microscope" size={24} color="gray" />}
          />
          <TertiaryButton name="VERIFY" onPress={() =>handleValidEligibility() }/>

          </ScrollView>

        </View>
      </View>
   </>
  )
}

export default EligibilityForm