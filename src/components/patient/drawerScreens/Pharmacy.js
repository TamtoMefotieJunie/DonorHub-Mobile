import React, { useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import tw from "twrnc"
import PharmacyCard from '../cards/PharmacyCard'

function Pharmacy({navigation}) {
  const [filterLocation, setFilterLocation] = useState("")
  const [filterDrug, setFilterDrug] = useState("")
  const [filterStoreType, setFilterStoreType] = useState("")
  const handleFilter = () => {}
  const handleViewMap = () => {
    navigation.navigate("Detailed Pharmacy")
  }
  return (
    <>
        <View style={tw`p-4`}>
          <Text style={tw`text-5 font-bold`}>Filter By</Text>
          <View style={tw`mt-5 flex flex-row justify-between items-center`}>
              <TextInput 
                placeholder='Drug'
                value={filterDrug}
                onChangeText={(text) => {setFilterDrug(text); handleFilter()}}
                style={tw`p-4 border border-gray-200 rounded-4 w-[32%] text-center`}
              />
              <TextInput 
                placeholder='Location'
                value={filterLocation}
                onChangeText={(text) => {setFilterLocation(text); handleFilter()}}
                style={tw`p-4 border border-gray-200 rounded-4 w-[32%] text-center`}
              />
              <SelectList 
                placeholder='Store Type'
                data={["Day", "Night"]}
                setSelected={(text) => setFilterStoreType(text)}
                onSelect={() => handleFilter()}
                style={tw`p-4 border border-gray-200 rounded-4 w-[32%] text-center`}
              />
           </View>
              <View style={tw`mt-5`}>
                  <Text style={tw`text-5 font-semibold border-b-2 p-4 border-gray-300`}>Available Pharmacies</Text>
                  <PharmacyCard 
                   onPress={() => handleViewMap()}
                   name="LadyLanelle"
                   location="Awae Escalier"
                  />
                  <PharmacyCard 
                   onPress={() => handleViewMap()}
                   name="Bethesda"
                   location="Carrefour Tamtam"
                  />
              </View>
              
        </View>
    </>
  )
}

export default Pharmacy