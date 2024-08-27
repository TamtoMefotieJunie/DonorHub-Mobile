import React,{useState} from 'react'
import { Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import tw from "twrnc"
import {MaterialIcons } from "@expo/vector-icons"
import { ScrollView } from 'react-native-gesture-handler'
import PatientCard from '../Cards/PatientCard';
import ChatScreen from '../Screens/ChatScreen'

const ChatDonor = ({navigation}) => {
  const [patient, setPatient] = useState([
    {
      name:"Metsia Olivia",
      numberUnRead:5,
      image: <Image 
      resizeMethod='contain'
      style={tw `rounded-full w-[22%] h-18`}
      source={require("../../../../assets/images/profile.png")}/>,
      lastMessage:"Hello Olivia",
      time: new Date().getHours()+":"+new Date().getMinutes()
  },
  {
    name:"Tchawa Ida ",
    numberUnRead:3,
    image: <Image 
    resizeMethod='contain'
    style={tw `rounded-full w-[22%] h-18`}
    source={require("../../../../assets/images/profile.png")}/>,
    lastMessage:"Hello Ida",
    time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Nana Fabiola",
  numberUnRead:2,
  image: <Image 
  resizeMethod='contain'
  style={tw `rounded-full w-[22%] h-18`}
  source={require("../../../../assets/images/profile.png")}/>,
  lastMessage:"Hello Fabiola",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Nana Rickerlan",
  numberUnRead:3,
  image: <Image 
  resizeMethod='contain'
  style={tw `rounded-full w-[22%] h-18`}
  source={require("../../../../assets/images/profile.png")}/>,
  lastMessage:"Hello Nana",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
name:"Sopning Auriol",
numberUnRead:2,
image: <Image 
resizeMethod='contain'
style={tw `rounded-full w-[22%] h-18`}
source={require("../../../../assets/images/profile.png")}/>,
lastMessage:"Hello Auriol",
time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Chris Kameni",
  numberUnRead:3,
  image: <Image 
  resizeMethod='contain'
  style={tw `rounded-full w-[22%] h-18`}
  source={require("../../../../assets/images/profile.png")}/>,
  lastMessage:"Hello Chris",
  time: new Date().getHours()+":"+new Date().getMinutes()
},
{
name:"Djoms wolfenson",
numberUnRead:2,
image: <Image 
resizeMethod='contain'
style={tw `rounded-full w-[22%] h-18`}
source={require("../../../../assets/images/profile.png")}/>,
lastMessage:"Hello Wolf",
time: new Date().getHours()+":"+new Date().getMinutes()
},
{
  name:"Ngwese Richmond",
  numberUnRead:3,
  image: <Image 
  resizeMethod='contain'
  style={tw `rounded-full w-[22%] h-18`}
  source={require("../../../../assets/images/profile.png")}/>,
  lastMessage:"Hello Richmond",
  time: new Date().getHours()+":"+new Date().getMinutes()
},

])
const [enteredPatient, setEnteredPatient] = useState("")
const handleSearchPatient = () => {}
const handleOpenSinglePatient = (patient) => {
  navigation.navigate("ChatScreen", {patient})
}
  return (
    <>
    <View style={tw`p-3`}>
        <View style={tw`flex flex-row justify-between items-center`}>
          <Text style={tw`text-8 text-[#54C2B5] font-semibold text-center`}>CHAT</Text>
          <View style={tw`flex w-[70%] rounded-3 border border-gray-300 p-2 flex-row justify-between items-center`}>
            <MaterialIcons 
             style={tw`text-gray-400`}
            name='search' size={24} />
            <TextInput 
             value={enteredPatient}
             onChangeText={(text) =>{setEnteredPatient(text); handleSearchPatient()}}
             placeholder='Search contact or message'
             style={tw`w-[85%]`}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={tw `h-[90%]`}>
          {
            patient?.map((singlePatient, index) => {
              return (
                <>
        <PatientCard 
         key={index}
         name={singlePatient.name}
         numberUnRead={singlePatient.numberUnRead}
         image={singlePatient.image}
         lastMessage={singlePatient.lastMessage}
         time={singlePatient.time}
         onPress={() => handleOpenSinglePatient(singlePatient)}
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

export default ChatDonor