import React from 'react'
import { Text,View,Image, TouchableOpacity, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import tw from "twrnc"
import TertiaryButton from '../../buttons/TertiaryButton';

const Profile = () => {
  return (
    <>
    <View style={[tw `bg-[#CF3304] h-[45%] flex flex-col items-center justify-center rounded-b-5`]}>
        <TouchableOpacity style={tw `rounded-full w-[37%] h-25 `}>
          <Image 
          resizeMethod='contain'
          style={tw `rounded-full w-[100%] h-[120%]`}
          source={require("../../../../assets/images/profile.png")}/>
          <View style={tw `rounded-full w-8 h-8 top-[-15] flex flex-col items-center justify-center right-[-29] bg-white`}>
            <MaterialIcons name="edit" size={24} color="gray"
          style={tw ``}
            />
          </View>
        </TouchableOpacity>
        <Text style={tw `text-white text-2xl mt-5 font-bold`}>Nana Fabiola</Text>
        <Text style={tw `text-white text-lg font-semibold`}>Essos-Yaounde</Text>

      </View>
      <View style={tw `bg-white shadow-md m-5 p-4 rounded-5 top-[-19] h-107`}>
        <Text style={tw `font-bold text-xl`}> Info </Text>
        <Text style={tw `text-black text-4 mt-2 ml-1 font-semibold`}>Blood Group</Text>
        <TextInput
        name="bloodgroup"
        type="text"
        value="A+"
        placeholder='A+'
        style={tw `h-10 bg-[#e5e5e5] rounded-lg pl-4 mt-1`}
        />
        <Text style={tw `text-black text-4 mt-2 ml-1 font-semibold`}>Age</Text>
        <TextInput
        name="bloodgroup"
        type="text"
        value="25"
        placeholder='A+'
        style={tw `h-10 bg-[#e5e5e5] rounded-lg pl-4 mt-1`}
        />
        <Text style={tw `text-black text-4 mt-2 ml-1 font-semibold`}>Email</Text>
        <TextInput
        name="bloodgroup"
        type="text"
        value="nana91@gmail.com"
        placeholder='A+'
        style={tw `h-10 bg-[#e5e5e5] rounded-lg pl-4 mt-1`}
        />
        <Text style={tw `text-black text-4 mt-2 ml-1 font-semibold`}>contact</Text>
        <TextInput
        name="bloodgroup"
        type="text"
        value="691557395"
        placeholder='A+'
        style={tw `h-10 bg-[#e5e5e5] rounded-lg pl-4 mt-1`}
        />
        <TertiaryButton name="SAVE"/>
        
      </View>
    
    </>
  )
}

export default Profile