import React, { useState } from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import HospitalCard from '../cards/BankCard'

function Hospital({navigation}) {
  const [filterLocation, setFilterLocation] = useState("")

  const handleFilter = () => {}
  const handleViewMap = () => {
    navigation.navigate("Localisation")
  }
  const [enteredHospital, setEnteredHospital] = useState("")
const handleSearchHospital = () => {}
const handleOpenSingleHospital = (donor) => {
  navigation.navigate("DonorScreen", {donor})
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
                <HospitalCard 
                onPress={() => handleViewMap()}
                name="CHU-Y"
                location="Melen"
                navigation={navigation}
                />
                
                <HospitalCard 
                onPress={() => handleViewMap()}
                name="Centre Pasteur"
                location="Carrefour Tamtam"
                navigation={navigation}
                />
                <HospitalCard 
                onPress={() => handleViewMap()}
                name="Central hospital"
                location="Carrefour "
                navigation={navigation}
                />
                <HospitalCard 
                onPress={() => handleViewMap()}
                name="Bethanie"
                location="Carrefour"
                navigation={navigation}
                />
                <HospitalCard 
                onPress={() => handleViewMap()}
                name="Military Hospital"
                location="Melen"
                />
                <HospitalCard 
                onPress={() => handleViewMap()}
                name="Hopital central"
                location="Carrefour"
                />
                <HospitalCard 
                onPress={() => handleViewMap()}
                name="Bethanie"
                location="Carrefour"
                />
                <HospitalCard 
                onPress={() => handleViewMap()}
                name="Bethanie"
                location="Carrefour"
                />
                </ScrollView>
                </View>      
              
        </View>
    </>
  )
}

export default Hospital