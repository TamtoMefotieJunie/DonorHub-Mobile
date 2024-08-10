import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet,Text, TextInput, View,Image } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import tw from "twrnc"
import {MaterialIcons,FontAwesome5} from "@expo/vector-icons"
import FormInput from '../../inputs/FormInput'
import SecondaryButton from '../../buttons/SecondaryButton'
import TertiaryButton from '../../buttons/TertiaryButton'


function Profile() {
  const [LanguageType,setLanguageType] = useState("");
  return (
    <>
       <View style={[tw `bg-[#CF3304] h-[25%] relative p-4 rounded-b-10`]}>
          <View style={tw `rounded-full w-[50%] h-[100%] top-15 self-center`}>
            <Image 
            resizeMethod='contain'
            style={tw `rounded-full w-[100%] h-[120%]`}
            source={require("../../../../assets/images/profile.png")}/>
          </View>
      </View>
      <View style={tw `p-4 mt-12 h-[80%]`}>
        <FormInput placeholder="name"
        editable = {false}
        value="junie"
        type="text"
         icon={<MaterialIcons name='edit' size={24} style={tw`text-[#8B8989]`} />}

        />
        <FormInput placeholder="email"
          editable = {false}
          type="text"
          value="junie@gmail.com"
          style={tw `text-gray-800`}
         icon={<MaterialIcons name='email' size={24} style={tw`text-[#8B8989]`} />}
        />
        
        <SelectList
        placeholder='Language'
        data={["French", "English"]}
        setSelected={(text) => setLanguageType(text)}
        boxStyles={styles.box}
        textStyles={styles.text}
        dropdownStyles={styles.dropdown}
        dropdownTextStyles={styles.dropdownText}
        />
        <FormInput placeholder="change password"
          editable = {true}
          type="password"
         
         icon={<FontAwesome5 name="lock" size={19} color="gray" />}
        />
        <TertiaryButton name="Save" />

      </View>
    </>
  )
}
const styles = StyleSheet.create({
  div:{
    borderBottomRightRadius:40,
    borderBottomLeftRadius:12
  },
  box: {
    backgroundColor: '#E8E4E4',
    borderRadius: 10,
    padding: 10,
    borderWidth:0,
    marginTop:23,
    height:60,
    paddingTop:20
  },
  text: {
    color: 'darkblue',
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: 'white',
  },
  dropdownText: {
    color: 'black',
  },
})



export default Profile 
