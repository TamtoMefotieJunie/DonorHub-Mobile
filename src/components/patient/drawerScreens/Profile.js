import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet,Text, TextInput, View,Image } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import FormInput from '../../inputs/FormInput'
import SecondaryButton from '../../buttons/SecondaryButton'
import TertiaryButton from '../../buttons/TertiaryButton'


function Profile() {
  const [LanguageType,setLanguageType] = useState("");
  return (
    <>
       <View style={[tw `bg-[#CF3304] h-[20%] relative p-4`, styles.div]}>
          <View style={tw `rounded-full w-[50%] h-[120%] top-10 self-center`}>
            <Image 
            resizeMethod='contain'
            style={tw `rounded-full w-[100%] h-[120%]`}
            source={require("../../../../assets/images/profile.png")}/>
          </View>
      </View>
      <View style={tw `p-4 mt-20 h-[80%]`}>
        <FormInput placeholder="name"
        editable = {false}
        type="text"
         icon={<MaterialIcons name='edit' size={24} style={tw`text-[#8B8989]`} />}

        />
        <FormInput placeholder="email"
          editable = {false}
          type="text"
          style={tw ``}
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
        <TertiaryButton name="Save" style={tw `mt-10`}/>

      </View>
    </>
  )
}
const styles = StyleSheet.create({
  div:{
    borderBottomRightRadius:80,
    borderBottomLeftRadius:80
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
