import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { ScrollView, Text } from 'react-native'
import tw from "twrnc"
import HospitalCard from '../cards/HospitalCard'
import {MaterialIcons} from "@expo/vector-icons"

function Appointment({navigation}) {
  const [hospitals, setHospitals] = useState([
    {
    name:"ODZA District Hospital",
    location:"Dispensaire Odza",
    desc:"12 years",
    icon:<MaterialIcons name="healing" size={90} style={tw`text-[#0C3778]`} />
    },
    {
      name:"Bingo Baptist Hospital",
      location:"Carrefour Amitie",
      desc:"12 years",
      icon:<MaterialIcons name="healing" size={90} style={tw`text-[#0C3778]`} />
      }
])
  return (
    <>
      <ScrollView>
          <View style={tw`p-4`}>
            <View style={tw`flex flex-row items-center justify-between`}>
               <View style={tw`flex flex-row justify-between rounded-5 w-[55%]  bg-[#EAE9E9] items-center p-2`}> 
                <MaterialIcons style={tw`text-[#999898]`} name="search" size={30} />
                <TextInput 
                 placeholder="Search hospital"
                  style={tw`w-[80%]`}
                />
               </View>
                <TouchableOpacity 
                 onPress={() => navigation.navigate("Appointment List")}
                style={tw`p-3  bg-teal-700 rounded-4`}>
                    <Text style={tw`font-semibold text-white`}>View appointments</Text>
                </TouchableOpacity>
            </View>
            <Text style={tw`text-5 font-semibold text-center mt-5`}>All Hospitals</Text>
            {
              hospitals?.map((hospital, index) => {
                return (
                  <>
                    <HospitalCard 
                      key={hospital.id}
                      onPress={() => navigation.navigate("Hospital Details", {
                        name: hospital.name,
                        location: hospital.location,
                        desc: hospital.desc
                      })}
                      name={hospital.name}
                      location={hospital.location}
                      icon={hospital.icon}
                      desc={hospital.desc}
                    />
                  </>
                )
              })
            }
          </View>
      </ScrollView>
    </>
  )
}

export default Appointment