import React, { useState } from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import HospitalCard from '../cards/BankCard'

function Hospital({navigation}) {
  const hospitals = [
    { name: "CHU-Y", location: "Melen", price: "20 000" },
    { name: "Centre Pasteur", location: "Carrefour", price: "25 000" },
    { name: "Central hospital", location: "Carrefour", price: "30 000" },
    { name: "Bethanie", location: "Carrefour", price: "22 500" },
    { name: "Military Hospital", location: "Melen", price: "35 000" },
    { name: "Hopital central", location: "Carrefour", price: "20 000" },
    { name: "Bethanie", location: "Carrefour", price: "19 000" },
    { name: "Bethanie", location: "Carrefour", price: "18 000" }
  ];


  const handleFilter = () => {}
  const handleViewMap = () => {
    navigation.navigate("Localisation")
  }
  const [enteredHospital, setEnteredHospital] = useState("")
const handleSearchHospital = () => {}
const handleOpenSingleHospital = (hospital) => {
  navigation.navigate("DetailHospital", {hospital})
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
                {hospitals.map((hospital, index) => (
                  <HospitalCard
                    key={index}
                    onPress={handleViewMap}
                    name={hospital.name}
                    location={hospital.location}
                    price={hospital.price}
                    navigation={navigation} // Pass navigation prop if needed for routing
                  />
                ))}
                </ScrollView>
                </View>      
              
        </View>
    </>
  )
}

export default Hospital