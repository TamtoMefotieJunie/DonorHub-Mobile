import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import tw from "twrnc"
import FormInput from '../../inputs/FormInput'
import PrimaryButton from '../../buttons/PrimaryButton';

function Laboratory() {
  return (
    <>
        <View style={tw`p-4`}>
            <Image source={require("../../../../assets/images/bg5.jpg")}
            resizeMode='content'
            style={tw `w-full h-[43%]`}
            />
            <Text style={tw`text-[#54C2B5] text-2xl text-center font-bold mt-3`}>Transfusion Feedback</Text>
            <ScrollView style={tw `h-[52%]`}>
              <FormInput
              placeholder="Patient's name"
              name ="patient info"
              icon={<MaterialIcons name="drive-file-rename-outline" size={24} color="gray" />}
              type="text"
              />
              <FormInput placeholder="Side-Effect" type="text" name="secondary_effect"
              icon={<MaterialIcons name="add-reaction" size={24} color="gray" />}/>
              <FormInput placeholder="Starting Time" type="text"
              name="start-time"
              icon={<MaterialCommunityIcons name="clock-start" size={24} color="gray" />}
              />
              <FormInput placeholder="Ending Time" type="text"
              name="end-time"
              icon={<MaterialCommunityIcons name="clock-end" size={24} color="gray" />}
              />
              <PrimaryButton name="Submit"/>
            </ScrollView>
        </View>
    </>
  )
}

export default Laboratory