import React from 'react'
import { ImageBackground, ScrollView, Text, View } from 'react-native'
import tw from "twrnc"
import NotificationCard from '../cards/NotificationCard'

function Notification() {
  return (
    <>
    <ImageBackground source={require("../../../../assets/images/notifBg.jpg")}
    resizeMode='content'
    style={tw `h-full bg-transparent`}
    blurRadius={30}
    >
      <ScrollView>
        <NotificationCard content="The patient .... has successfuly been tranfused the blood of group A+"/>
        <NotificationCard content="The patient .... has successfuly been tranfused the blood of group A+"/>
        <NotificationCard content="The patient .... has successfuly been tranfused the blood of group A+"/>
        <NotificationCard content="The patient .... has successfuly been tranfused the blood of group A+"/>
        <NotificationCard content="The patient .... has successfuly been tranfused the blood of group A+"/>
        <NotificationCard content="The patient .... has successfuly been tranfused the blood of group A+"/>
      </ScrollView>
    </ImageBackground>
    </>
  )
}

export default Notification