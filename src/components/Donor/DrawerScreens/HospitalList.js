import React, { useState } from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'

import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import HospitalCard from '../Cards/HospitalCard'

function HospitalList({navigation}) {
  
const [hospital,setHospital] = useState([
  {
    name:"CHU-Y",
    location:"Melen",
    Days:"Monday to Friday",
    Time: "8AM - 6PM",
    Exceptions:"Saturday",
    ExceptionTime:"8AM - 2PM"
  },
  {
    name:"Centre Pasteur",
    location:"odza",
    Days:"everyday",
    Time: "8AM - 7PM",
    Exceptions:"Saturday",
    ExceptionTime:"8AM - 2PM"
  },
  {
    name:"Central hospital",
    location:"post",
    Days:"Monday to Friday",
    Time: "8AM - 6PM",
    Exceptions:"Wednesday",
    ExceptionTime:"8AM - 2PM"
  },
  {
    name:"Military-hospital",
    location:"camp-militaire",
    Days:"everyday",
    Time: "8AM - 7PM",
    Exceptions:"no exception",
    ExceptionTime:" - - - "
  },
  {
    name:"Bethanie",
    location:"Mokolo",
    Days:"Monday to Friday",
    Time: "8AM - 6PM"
  },
  {
    name:"Military-hospital",
    location:"camp-militaire",
    Days:"Monday to Friday",
    Time: "8AM - 6PM"
  },
  {
    name:"Military-hospital",
    location:"camp-militaire",
    Days:"Monday to Friday",
    Time: "8AM - 6PM",
    Exceptions:"Saturday",
    ExceptionTime:"8AM-2PM"
  },
  {
    name:"Military-hospital",
    location:"camp-militaire"
  },
  
]) 

const [selectedHospital, setSelectedHospital] = useState(null);
const handleOpenSingleHospital = (hospital) => {
  navigation.navigate("Hospital detail", {hospital})
  setSelectedHospital(hospital)
}
const [filterLocation, setFilterLocation] = useState("")

const handleFilter = () => {}
const handleViewMap = () => {
  navigation.navigate("HospitalLocalisation")
}
const [enteredHospital, setEnteredHospital] = useState("")
const handleSearchHospital = () => {}

  return (
    <>
        <View style={tw`p-4 h-[100%]`}>
          
          <View style={tw`mt-3 flex flex-row justify-between w-full items-center`}>
              <View style={tw`flex w-[95%] rounded-3 border border-gray-300 p-2 flex-row justify-between items-center`}>
                <MaterialIcons 
                style={tw`text-gray-400`}
                name='search' size={24} />
                <TextInput 
                value={enteredHospital}
                onChangeText={(text) =>{setEnteredHospital(text); handleSearchHospital()}}
                placeholder='Search'
                style={tw`w-[85%]`}
                />
             </View>
              
           </View>
            <Text style={tw`text-5 font-semibold border-b-2 p-4 border-gray-300`}>Available Hospitals</Text>
              <View style={tw`h-[85%]`}>
                <ScrollView showsVerticalScrollIndicator={false}>
                
                
                {hospital?.map((singleHospital, index) => (
                  <HospitalCard
                    key={index}
                    name={singleHospital.name}
                    navigation={navigation}
                    location={singleHospital.location}
                    onMapPress={() => handleViewMap()}
                    onDetailPress={() => handleOpenSingleHospital(singleHospital)}
                  />
                ))}
                
                </ScrollView>
                </View>      
              
        </View>
    </>
  )
}

export default HospitalList