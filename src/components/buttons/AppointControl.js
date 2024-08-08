import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Pressable } from 'react-native'
import tw from "twrnc"

function AppointControl({name, status, onPress, isControl}) {
  return (
    <>
      {
        isControl == false ? 
        <Pressable
         onPress={onPress}
         style={
            status === "active" ?
            tw`bg-[#54C2B5] p-2 rounded-4 w-[31%] transition-all group-hover:scale-100 group-hover:bg-white/30 group relative overflow-hidden rounded-2xl text-lg font-bold text-white` 
            :
            tw`bg-gray-300 p-2 rounded-4 w-[31%] transition-all group-hover:scale-100 group-hover:bg-white/30 group relative overflow-hidden rounded-2xl text-lg font-bold text-white`
         }
        >
            <Text style={
                status === "active" ?
                tw`text-center text-white`:
                tw`text-gray-800 text-center`
            }>{name}</Text>
        </Pressable> :
        <TouchableOpacity
        onPress={onPress}
        style={
           status === "active" ?
           tw`bg-[#54C2B5] p-2 rounded-4 w-[35%] transition-all group-hover:scale-100 group-hover:bg-white/30 group relative overflow-hidden rounded-2xl text-lg font-bold text-white` 
           :
           tw`bg-gray-300 p-2 rounded-4 w-[35%] transition-all group-hover:scale-100 group-hover:bg-white/30 group relative overflow-hidden rounded-2xl text-lg font-bold text-white`
        }
       >
           <Text style={
               status === "active" ?
               tw`text-center text-white`:
               tw`text-gray-800 text-center`
           }>{name}</Text>
       </TouchableOpacity>
      }
    </>
  )
}

export default AppointControl