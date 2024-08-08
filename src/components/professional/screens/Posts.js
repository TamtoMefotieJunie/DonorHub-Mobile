import React, { useState } from "react";
import { Alert, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import {
  MaterialCommunityIcons, MaterialIcons} from "react-native-vector-icons";
import Posts from "../../patient/drawerScreens/Posts";
import SecondaryButton from "../../buttons/SecondaryButton";
import { Modal } from "react-native";
import NewPost from "../button/NewPost";
import FormInput from "../../inputs/FormInput";
import PrimaryButton from "../../buttons/PrimaryButton";



function Post() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    
    <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        BackgroundProps={{
          style: [
          tw`justify-center items-center`,
          { backgroundColor: '#00000080' },
        ]
        }}>
      
        <View style={tw`p-5 h-full bg-[#00000080]`}>
        
          <View style={tw`mt-45 bg-white p-5 rounded-6 h-[60%] `}>
          
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <MaterialCommunityIcons name="close-circle" size={30} color="gray" style={tw`text-right mb-5`} />
            </TouchableOpacity>
            <Text style={tw`text-[#54C2B5] text-2xl text-center font-bold`}>UPDATES</Text>
            <FormInput placeholder="image"
            type="file"
            // onChange={handleChange("telNumber")}
            // onBlur={handleBlur("telNumber")}
            name="image"
            icon={<MaterialCommunityIcons name="file-image" size={24} color="black" style={tw`text-[#8B8989]`} />}  
            />
            <FormInput placeholder="content"
            type="text"
            name="message"
            icon={
              <MaterialCommunityIcons name="content-save-move" size={24} color="gray" />}
            />

            <PrimaryButton name="POST"/>
          
          </View>
          
        </View>
      
      </Modal>
      
    <View style={tw `pt-3 `}>
      
      <NewPost name="New"
      onPress={() => setModalVisible(!modalVisible)}/>
    </View>
    
    <Posts/>
    </>
  )
}

export default Post