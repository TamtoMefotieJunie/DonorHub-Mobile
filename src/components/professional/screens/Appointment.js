import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import PatientRequest from '../cards/PatientRequest'

function Appointment() {
  const [requestList, setRequestList] = useState([
    {
      patientName: "Ange Sepdeu",
      patientImage: <MaterialIcons name="account-circle" size={70} />,
      title: "General Checkup",
      date: new Date().getHours()+":"+new Date().getMinutes()
    },
    {
      patientName: "Ange Sepdeu",
      patientImage: <MaterialIcons name="account-circle" size={70} />,
      title: "General Checkup",
      date: new Date().getHours()+":"+new Date().getMinutes()
    },
  ])
  const handleDecision = (values) => {}
  return (
    <>
      <ScrollView>
        <View style={tw`p-4`}>
          {
            requestList?.map((request, index) => {
              return (
                <>
                <PatientRequest
                  key={index}
                  patientImage={request.patientImage}
                  patientName={request.patientName}
                  title={request.title}
                  date={request.date} 
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