import React, { useEffect,useState } from 'react'
import { View,Text,Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc"

const NotifCard = ({content}) => {
    const [notificationTime, setNotificationTime] = useState("");
    useEffect(() => {
        setNotificationTime(getCurrentTime())
    },[])
    const getCurrentTime = () => {
        return now = new Date().toLocaleTimeString();
    }
  return (
    <View style={tw `p-2 flex flex-col items-center justify-between bg-[#E3F2FD]/80 rounded-xl m-2`}>
        <View style={tw `pl-4 pr-4 mt-3 flex flex-row items-center justify-between`}>
            <Text style={tw `text-black text-4.5 font-semibold mr-5 text-justify `}>{content}
            </Text>
            <TouchableOpacity>
                <Ionicons name="trash-bin-sharp" size={25} color="crimson" />
            </TouchableOpacity>

        </View>
        <Text  style={tw `text-black text-4 font-bold self-end`}>{notificationTime}</Text>
    </View>
  )
}

export default NotifCard