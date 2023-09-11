import React, { useState } from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import tw from "twrnc"
import ContactCard from '../../patient/cards/ContactCard'
import {MaterialIcons} from "@expo/vector-icons"

function Chat({navigation}) {
  const [contact, setContact] = useState([
    {
         name:"Sandra Norvelle",
         numberUnRead:5,
         image: <MaterialIcons name="account-circle" size={70} />,
         lastMessage:"Hello Doctor",
         time: new Date().getHours()+":"+new Date().getMinutes()
  },
  {
    name:"Dorelle Nadia",
    numberUnRead:3,
    image: <MaterialIcons name="account-circle" size={70} />,
    lastMessage:"Hello Doctor N",
    time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Ida Stephanie",
  numberUnRead:2,
  image: <MaterialIcons name="account-circle" size={70} />,
  lastMessage:"Hello Doctor",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Dr. Dorelle Nadia",
  numberUnRead:3,
  image: <MaterialIcons name="account-circle" size={70} />,
  lastMessage:"Hello Doctor N",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
name:"Dr. Ida Stephanie",
numberUnRead:2,
image: <MaterialIcons name="account-circle" size={70} />,
lastMessage:"Hello Doctor",
time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Dr. Dorelle Nadia",
  numberUnRead:3,
  image: <MaterialIcons name="account-circle" size={70} />,
  lastMessage:"Hello Doctor N",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
name:"Dr. Ida Stephanie",
numberUnRead:2,
image: <MaterialIcons name="account-circle" size={70} />,
lastMessage:"Hello Doctor",
time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Dr. Dorelle Nadia",
  numberUnRead:3,
  image: <MaterialIcons name="account-circle" size={70} />,
  lastMessage:"Hello Doctor N",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
name:"Dr. Ida Stephanie",
numberUnRead:2,
image: <MaterialIcons name="account-circle" size={70} />,
lastMessage:"Hello Doctor",
time: new Date().getHours()+":"+new Date().getMinutes()
},

])
const [enteredContact, setEnteredContact] = useState("")
const handleSearchContact = () => {}
const handleOpenSingleContact = (contact) => {
  navigation.navigate("Chat Screen", {contact})
}
  return (
    <>
      <View style={tw`p-4`}>
          <View style={tw`flex rounded-3 border border-gray-300 p-2 flex-row justify-between items-center`}>
            <MaterialIcons 
             style={tw`text-gray-400`}
            name='search' size={24} />
            <TextInput 
             value={enteredContact}
             onChangeText={(text) =>{setEnteredContact(text); handleSearchContact()}}
             placeholder='Search contact or message'
             style={tw`w-[85%]`}
            />
        </View>
        <ScrollView>
          {
            contact?.map((singleContact, index) => {
              return (
                <>
        <ContactCard 
         key={index}
         name={singleContact.name}
         numberUnRead={singleContact.numberUnRead}
         image={singleContact.image}
         lastMessage={singleContact.lastMessage}
         time={singleContact.time}
         onPress={() => handleOpenSingleContact(singleContact)}
        />        
                </>
              )
            })
          }
        
        </ScrollView>
      </View>
    </>
  )
}

export default Chat