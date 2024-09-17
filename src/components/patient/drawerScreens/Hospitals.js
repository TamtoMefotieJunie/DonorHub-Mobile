import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import config from '../../../../config'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import HospitalCard from '../cards/BankCard'

function Hospital({navigation}) {
  const [hospital,setHospital] = useState([]);
  
  const API_URL = config.API_URL;;
  useEffect(() => {
      console.log("string");
      fetch(`${API_URL}/banks/allHospital`, {
        method: "GET",    
    })
    .then(async (response) => {
        if (response.ok) {
            console.log("hospitals fetched successfully");
            const data = await response.json();
            console.log(data)
            setHospital(data.data) 
            data.data.forEach(hospital => {
             const hospitalLongitude = hospital.longitude
             const hospitalLatitude = hospital.latitude
              console.log("the hospital with id",hospital._id,"is:",hospitalLongitude); 
              console.log("the hospital with id",hospital._id,"is:",hospitalLatitude); 
          }); 
        } else {
            const errorMessage = await response.text();
            console.log("fetch failed:", errorMessage);
        }
      })
  },[])

  
  const handleFilter = () => {}
  const handleViewMap = ({ hospitalLatitude,hospitalLongitude }) => {
    console.log('Navigating with:', hospitalLatitude, hospitalLongitude);
    navigation.navigate("Localisation", {
      hospitalLatitude,
      hospitalLongitude
  });
  }
  const [enteredHospital, setEnteredHospital] = useState("")
const handleSearchHospital = () => {}
const handleOpenSingleHospital = (hospitalId) => {
  console.log(hospitalId)
  navigation.navigate("Detailed Hospital", {hospitalId})
}
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
              <View style={tw`h-[78%]`}>
                <ScrollView showsVerticalScrollIndicator={false}>
                {hospital === null || hospital.length === 0 ? (
                      <Text style={tw`text-5 font-semibold mt-10 text-center`}>No hospital found</Text> 
                  ) : (
                      hospital.map((hospital, index) => ( 
                          <HospitalCard
                              key={index}
                              onPress={() => handleViewMap({ hospitalLatitude: hospital.latitude, hospitalLongitude: hospital.longitude })}
                              name={hospital.name}
                              onPress1={() => handleOpenSingleHospital(hospital._id)}
                              location={hospital.location}
                              price={hospital.packPrice}
                              
                          />
                      ))
                  )}
                </ScrollView>
                </View>      
              
        </View>
    </>
  )
}

export default Hospital