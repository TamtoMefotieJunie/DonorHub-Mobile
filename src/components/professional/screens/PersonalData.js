import React from 'react'
import { Text,View,Image, ImageBackground } from 'react-native'
import { MaterialIcons,MaterialCommunityIcons ,FontAwesome5} from '@expo/vector-icons';
import tw from "twrnc"
import FormInput from '../../inputs/FormInput'
import SecondaryButton from '../../buttons/SecondaryButton';
import TertiaryButton from '../../buttons/TertiaryButton';

const PersonalData = () => {
  return (
    <>
   <ImageBackground
   source={require("../../../../assets/images/labprofile.jpg")}
   resizeMode='content'
   style={tw `h-full`}
   >
        <View style={tw `bg-transparent p-4 self-center mt-10`}>
        <FormInput placeholder="name"
        editable = {false}
        type="text"
        value="Tamto"
         icon={<MaterialIcons name='edit' size={20} style={tw`text-[#8B8989]`} />}

        />
        <FormInput placeholder="email"
          editable = {false}
          value="Tamto"
          type="text"
          style={tw ``}
         icon={<MaterialIcons name='email' size={20} style={tw`text-[#8B8989]`} />}
        />
        <FormInput placeholder="Matricle"
        editable = {false}
        value="CHUY001"
        type="text"
         icon={<MaterialCommunityIcons name="identifier" size={24} color="gray" />}

        />
        <FormInput placeholder="Melen-Y"
          editable = {false}
          type="text"
          style={tw ``}
         icon={<FontAwesome5 name="address-card" size={19} color="gray" />}
        />
         <FormInput placeholder="change password"
          editable = {true}
          type="password"
         
         icon={<FontAwesome5 name="lock" size={19} color="gray" />}
        />
        <TertiaryButton name="UPDATE" style={tw `mt-10`}/>

  
   </View>


   </ImageBackground>
    </>
  )
}

export default PersonalData