import React, {useState} from 'react'
import {Modal, Pressable, ScrollView, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import InfoCard from '../cards/InfoCard'
import ConsultationCard from '../cards/ConsultationCard'

function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <ScrollView>
      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="formSheet">
        <View style={tw`p-4`}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <MaterialIcons  name="close" size={30} style={tw`text-right`} />
          </TouchableOpacity>
          <View style={tw`mt-5`}>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Settings")}
          style={tw`flex w-[40%] flex-row items-center justify-between`}>
            <MaterialIcons name="settings" size={25} />
            <Text style={tw`text-5 font-semibold`}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Prescription")}
          style={tw`flex flex-row w-[50%] mt-5 items-center justify-between`}>
            <MaterialIcons name="medical-services" size={25} />
            <Text style={tw`text-5 font-semibold`}>Prescription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row w-[31%] mt-5 items-center justify-between`}>
            <MaterialIcons name="help" size={25} />
            <Text style={tw`text-5 font-semibold`}>Help</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <View style={tw`p-4`}>
            <View style={tw`flex flex-row justify-between items-center`}>
                <View style={tw`flex flex-row justify-between items-center`}>  
                    <MaterialIcons name="account-circle" size={60} />
                    <View style={tw``}>
                        <Text style={tw`text-[#0C3778] font-semibold`}>Welcome back,</Text>
                        <Text style={tw`text-7 font-semibold`}>Dorelle</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                 <MaterialIcons name="menu-open" size={30} />
                 </TouchableOpacity>

            </View>
            <View style={tw`mt-5 flex flex-row items-center justify-between w-full`}>
                <InfoCard 
                  info="patients"
                  number={50}
                  style="bg-teal-800 rounded-5 w-[47%]"
                />
                <InfoCard 
                  info="appointments"
                  number={10}
                  style="bg-[#B3BFCD] rounded-5 w-[47%]"
                />
            </View>
                <Text style={tw`mt-3 text-5 font-semibold text-[#0C3778]`}>Upcoming Consultations</Text>
                <ScrollView horizontal>
                    <ConsultationCard 
                      name="John Hopkins"
                      launch={true}
                      btnVal="launch call"
                      time={12}
                      style="bg-blue-900 w-40 rounded-5"
                    />
                    <ConsultationCard 
                      name="James Clerk"
                      launch={false}
                      btnVal="Await"
                      time={12}
                      style="bg-[#B3BFCD] ml-5 w-40 rounded-5"
                    />
                    <ConsultationCard 
                      name="John Doe"
                      launch={false}
                      btnVal="Await"
                      time={12}
                      style="bg-[#B3BFCD] ml-5 w-40 rounded-5"
                    />
                </ScrollView>
                <View style={tw`mt-3`}>
                    <View style={tw`flex flex-row justify-between items-center`}>
                        <Text style={tw`text-5 font-semibold text-[#0C3778]`}>Last Enquiries</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-right" size={30} color="#0C3778" />
                        </TouchableOpacity>
                    </View>
                        <View 
                        style={tw`flex flex-row justify-between items-center mt-3 rounded-5 shadow-md bg-white p-4`}>
                            <MaterialIcons name="person" size={50} />
                            <View style={tw`w-[85%]`}>
                                <Text style={tw`text-5 font-semibold`}>Denis Torrent</Text>
                                <Text style={tw`text-3 text-gray-400`}>Video Consultation</Text>
                            </View>
                        </View>
                        <View 
                        style={tw`flex flex-row justify-between items-center mt-3 rounded-5 shadow-md bg-white p-4`}>
                            <MaterialIcons name="person" size={50} />
                            <View style={tw`w-[85%]`}>
                                <Text style={tw`text-5 font-semibold`}>Denis Torrent</Text>
                                <Text style={tw`text-3 text-gray-400`}>Video Consultation</Text>
                            </View>
                        </View>
                </View>
        </View>
        </ScrollView>
    </>
  )
}

export default Home