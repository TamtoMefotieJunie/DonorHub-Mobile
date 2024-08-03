import React, { useState } from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import tw from "twrnc"
import HospitalCard from '../cards/BankCard'

function Hospital({navigation}) {
  const [filterLocation, setFilterLocation] = useState("")
  const [filterStoreType, setFilterStoreType] = useState("")
  const handleFilter = () => {}
  const handleViewMap = () => {
    navigation.navigate("Localisation")
  }
  return (
    <>
        <View style={tw`p-4 h-[100%]`}>
          <Text style={tw`text-2xl font-bold text-[#54C2B5]`}>Filter By</Text>
          <View style={tw`mt-3 flex flex-row justify-between items-center`}>
              <TextInput 
                placeholder='Location'
                value={filterLocation}
                onChangeText={(text) => {setFilterLocation(text); handleFilter()}}
                style={tw`p-4 border border-gray-200 rounded-4 w-[50%] h-12 items-center text-center`}
              />
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