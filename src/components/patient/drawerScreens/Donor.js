import React, { useState } from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import tw from "twrnc"
import ContactCard from '../cards/ContactCard'
import {MaterialIcons} from "@expo/vector-icons"

function Donor({navigation}) {
  const [donor, setDonor] = useState([
    {
         name:"Leonel Jugale",
         numberUnRead:5,
         image: <MaterialIcons name="account-circle" size={60} color="#54C2B5"/>,
         lastMessage:"Hello Doctor",
         time: new Date().getHours()+":"+new Date().getMinutes()
  },
  {
    name:"Richmond Ngwese",
    numberUnRead:3,
    image: <MaterialIcons name="account-circle" size={60} color="#54C2B5"/>,
    lastMessage:"Hello Doctor N",
    time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Franck cyrina",
  numberUnRead:2,
  image: <MaterialIcons name="account-circle" size={60} color="#54C2B5"/>,
  lastMessage:"Hello Doctor",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Seraphita Ange",
  numberUnRead:3,
  image: <MaterialIcons name="account-circle" size={60} color="#54C2B5"/>,
  lastMessage:"Hello Doctor N",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
name:"Daniel Ndabose",
numberUnRead:2,
image: <MaterialIcons name="account-circle" size={60} color="#54C2B5"/>,
lastMessage:"Hello Doctor",
time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Auriol Sopning",
  numberUnRead:3,
  image: <MaterialIcons name="account-circle" size={60} color="#54C2B5"/>,
  lastMessage:"Hello Doctor N",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
name:"Samira Domche",
numberUnRead:2,
image: <MaterialIcons name="account-circle" size={60} color="#54C2B5"/>,
lastMessage:"Hello Doctor",
time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Nono Rufus",
  numberUnRead:3,
  image: <MaterialIcons name="account-circle" size={60} />,
  lastMessage:"Hello Doctor N",
  time: new Date().getHours()+":"+new Date().getMinutes()
}

])
const [enteredDonor, setEnteredDonor] = useState("")
const handleSearchDonor = () => {}
const handleOpenSingleDonor = (donor) => {
  navigation.navigate("DonorScreen", {donor})
}
  return (
    <>
      <View style={tw`p-3`}>
        <View style={tw`flex flex-row justify-between items-center`}>
          <Text style={tw`text-6 text-[#54C2B5] font-semibold text-center`}>Donors Compatible with you</Text>
          
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            donor?.map((singleDonor, index) => {
              return (
                <>
        <ContactCard 
         key={index}
         name={singleDonor.name}
         numberUnRead={singleDonor.numberUnRead}
         image={singleDonor.image}
         lastMessage={singleDonor.lastMessage}
         time={singleDonor.time}
         onPress={() => handleOpenSingleDonor(singleDonor)}
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

export default Donor