import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import PatientRequest from '../cards/PatientRequest'
import { ImageBackground } from 'react-native'

function Appointment() {
  const [requestList, setRequestList] = useState([
    {
      patientName: "Willy Tamo",
      patientImage: <MaterialIcons name="account-circle" size={60} />,
      title: "General Checkup",
      group:"AB+",
      date: new Date().toDateString(),
      time: new Date().getHours()+":"+new Date().getMinutes()
    },
    {
      patientName: "Leo Mouaffo",
      patientImage: <MaterialIcons name="account-circle" size={60} />,
      title: "General Checkup",
      date: new Date().toDateString(),
      group:"A+",
      date: new Date().toDateString(),
      time: new Date().getHours()+":"+new Date().getMinutes()
    },
    {
      patientName: "Leo Mouaffo",
      patientImage: <MaterialIcons name="account-circle" size={60} />,
      title: "General Checkup",
      date: new Date().toDateString(),
      group:"A+",
      date: new Date().toDateString(),
      time: new Date().getHours()+":"+new Date().getMinutes()
    },
    {
      patientName: "Leo Mouaffo",
      patientImage: <MaterialIcons name="account-circle" size={60} />,
      title: "General Checkup",
      date: new Date().toDateString(),
      group:"A+",
      date: new Date().toDateString(),
      time: new Date().getHours()+":"+new Date().getMinutes()
    },
  ])
  const handleDecision = (values) => {}
  return (
    <>
    <ImageBackground source={require("../../../../assets/images/bg4.jpg")}
    resizeMode='content'
    style={tw `h-full bg-transparent`}
    >
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
                  group={request.group}
                  date={request.date}
                  time={request.time} 
                />    
                </>
              )
            })
          }
        </View>
      </ScrollView>
      </ImageBackground>
    </>
  )
}

export default Appointment