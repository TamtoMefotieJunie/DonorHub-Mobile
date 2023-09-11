import React, {useState} from 'react'
import { ScrollView, Text, View } from 'react-native'
import tw from "twrnc"
import AppointControl from '../../buttons/AppointControl'
import {MaterialIcons} from "@expo/vector-icons"
import AppointmentCard from '../cards/AppointmentCard'

function AppointmentList() {
    const [controls, setControls] = useState([
        {
        name: "Upcoming",
        status: "active"
        },
        {
            name: "Complete",
            status: "inactive"
        },
        {
            name: "Pending",
            status: "inactive"
        },
])
    const handleChangeStatus = (val) => {
        const arr = [...controls]
        arr.map(control => {
                control.status = "inactive"
        })
        arr.map(control => {
            if(control.name == val)
            control.status = "active"
        })
        setControls(arr)
    }
    const [appointmentList, setAppointmentList] = useState([
        {
        doctorName: "Dr. Dorelle Nadia",
        doctorImage: <MaterialIcons name="account-circle" size={80} />,
        date: new Date().getHours() + ":" + new Date().getMinutes(),
        title: "Surgeon"
        },
        {
            doctorName: "Dr. Norvelle Sandra",
            doctorImage: <MaterialIcons name="account-circle" size={80} />,
            date: new Date().getHours() + ":" + new Date().getMinutes(),
            title: "Surgeon"
        },
            {
                doctorName: "Dr. Audrey Ruphine",
                doctorImage: <MaterialIcons name="account-circle" size={80} />,
                date: new Date().getHours() + ":" + new Date().getMinutes(),
                title: "Surgeon"
            },
])
  return (
    <>
        <View style={tw`p-4`}>
            <Text style={tw`mb-3 text-6 font-semibold`}>Appointments List</Text>
            <View style={tw`flex flex-row justify-between`}>
                {
                    controls?.map((control, index) => {
                        return(
                            <>
                              <AppointControl 
                                key={index}
                                name={control.name}
                                status={control.status}
                                isControl={false}
                                onPress={() => handleChangeStatus(control.name)}
                                />
                            </>
                        )
                    })
                }
            </View>
            <ScrollView>
            {
                    appointmentList?.map((appointment, index) => {
                        return (
                            <>
                              <AppointmentCard 
                               doctorName={appointment.doctorName}
                               doctorImage={appointment.doctorImage}
                               date={appointment.date}
                               title={appointment.title}
                              />
                            </>
                        )
                    })
            }
            </ScrollView>
        </View>
    </>
  )
}

export default AppointmentList