import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import MessageCard from '../../patient/cards/MessageCard'

function ChatScreen({navigation, route}) {
    const {contact} = route.params
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState([
        {
            message: "Hello Doctor",
            incoming: false,
            time: new Date().getHours()+ ":" + new Date().getMinutes()
        },
        {
            message: "Hello Yes bro",
            incoming: true,
            time: new Date().getHours()+ ":" + new Date().getMinutes()
        },
        {
            message: "Hello Mr",
            incoming: false,
            time: new Date().getHours()+ ":" + new Date().getMinutes()
        }
    ])
    const sendMessage = () => {}
  return (
    <>
        <View style={tw`bg-[#0C3778] p-4 flex flex-row justify-between items-center`}>
              <View style={tw`flex flex-row justify-between items-center w-[57%]`}>
                <TouchableOpacity
                 onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
              </TouchableOpacity>
             <MaterialIcons name="account-circle" size={40} color="white" />
             <View>
             <Text style={tw`text-white text-4 font-semibold`}>{contact.name}</Text>
            <Text style={tw`text-white text-3`}>5 mins ago</Text>
            </View>
        </View>
            <View style={tw`flex flex-row justify-between items-center w-[20%]`}>
            <MaterialIcons name="phone" size={24} color="white" />
            <MaterialIcons name="videocam" size={30} color="white" />           
            </View>
        </View>
        <View style={tw`p-4 h-[90%]`}>
            <ScrollView>
            {
                messages?.map((message, index) => {
                    return (
                        <>
                            <MessageCard 
                             key={index}
                             incoming={message.incoming}
                             message={message.message}
                             time={message.time}
                            />
                        </>
                    )
                })
            }
            </ScrollView>
            <View style={tw`flex flex-row justify-between items-center absolute bottom-5 left-0 right-0`}>
                <View style={tw`p-4 rounded-5 bg-gray-700 w-[90%] flex flex-row justify-between items-center`}>
                    <MaterialIcons 
                    style={tw`text-white`} name="emoji-emotions" size={30} />
                    <TextInput 
                      placeholder='Message'
                      value={newMessage}
                      style={tw`text-white w-[65%]`}
                      placeholderTextColor="white"
                      onChangeText={(text) => setNewMessage(text)}

                    />
                    <MaterialIcons name="attach-file" size={30} style={tw`text-white`} />
                    <MaterialIcons name="camera-alt" size={30} style={tw`text-white`} />
                </View>
                <MaterialIcons name="send" size={40} style={tw`text-gray-700`} />
            </View>
        </View>
    </>
  )
}

export default ChatScreen