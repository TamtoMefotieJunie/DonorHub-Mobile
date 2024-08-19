import React, {useState} from 'react'
import { Text, View } from 'react-native'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import HospitalCard from '../cards/HospitalCard'

function HospitalScreen({navigation, route}) {
    const {name, location} = route.params
    const [doctors, setDoctors] = useState([
        {
            name: "Dr. Sandra Norvelle",
            icon: <MaterialIcons name="account-circle" size={60} />,
            title: "Cardiologist - ODZA",
        },
        {
            name: "Dr. Eric Alex",
            icon: <MaterialIcons name="account-circle" size={60} />,
            title: "Cardiologist - ODZA",
        },
        {
            name: "Dr. Edithe La Grace",
            icon: <MaterialIcons name="account-circle" size={60} />,
            title: "Psychologist - ODZA",
        },
    ])
  return (
    <>
        <View style={tw`p-4`}>
                <View style={tw`flex flex-row justify-between items-center`}>
                    <MaterialIcons name="local-hospital" size={50} style={tw`text-teal-800`} />
                    <Text style={tw`font-bold text-7 text-teal-800`}> {name}</Text>
                </View>
            <Text style={tw`text-5 font-semibold mt-3`}>Welcome back, 
            <Text style={tw`font-bold`}> Chris</Text></Text>
            <View style={tw`mt-5`}>
                <Text style={tw`text-4 text-center font-bold mb-2 text-teal-800`}>Meet our doctors</Text>
                {
                    doctors?.map((doctor, index) => {
                        return (
                            <>
                                <HospitalCard 
                                 onPress={() => navigation.navigate("Appointment Form", {
                                    doctorName: doctor.name,
                                    doctorTitle: doctor.title
                                 })}
                                 key={index}
                                 icon={doctor.icon}
                                name={doctor.name}
                                location={doctor.title}
                                />            
                            </>
                        )
                    })
                }
                
            </View>
        </View>
    </>
  )
}

export default HospitalScreen