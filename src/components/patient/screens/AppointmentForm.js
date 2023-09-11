import React, {useState} from 'react'
import { Pressable, Text, View } from 'react-native'
import tw from "twrnc"
import {MaterialIcons} from "@expo/vector-icons"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PrimaryButton from "../../buttons/PrimaryButton"

function AppointmentForm({navigation, route}) {
  const [appointmentDate, setAppointmentDate] = useState("")
  const handleSubmitRequest = () => {}
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setAppointmentDate(date)
    hideDatePicker();
  };
  const {doctorName, doctorTitle} = route.params
  return (
    <>
      <View style={tw`p-4`}>
          <View style={tw`flex flex-row bg-white p-4 justify-between items-center shadow-md rounded-4`}>
            <View style={tw`flex flex-col justify-between`}>
                <Text style={tw`text-6 text-[#0C3778] font-bold`}>{doctorName}</Text>
                <Text style={tw`font-semibold`}>{doctorTitle}</Text>
            </View>
              <MaterialIcons name="account-circle" size={60} />
          </View>
            <View style={tw`mt-3 shadow-md bg-white rounded-4 p-4`}>
            <Text style={tw`text-center text-5 font-semibold`}>Appointment Form</Text>
              <Pressable
               onPress={showDatePicker}
               style={tw`p-2 rounded-4 bg-teal-700 mt-4`}>
                  <Text style={tw`text-white text-center font-bold`}>Choose a date</Text>
              </Pressable>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
                <Text style={tw`mt-2 text-4 font-semibold`}>Available periods</Text>
                <View style={tw`flex mt-2 flex-row items-center justify-between w-[35%]`}>
                  <Pressable style={tw`w-5 h-5 border rounded-5`}></Pressable>
                  <Text style={tw`text-4`}>2pm - 4pm</Text>
                </View>
                <View style={tw`flex mt-2 flex-row items-center justify-between w-[35%]`}>
                  <Pressable style={tw`w-5 h-5 border rounded-5`}></Pressable>
                  <Text style={tw`text-4`}>4pm - 5pm</Text>
                </View>
                    <PrimaryButton 
                      onPress={() => handleSubmitRequest()}
                      name="Book Appointment"
                    />
            </View>
      </View>
    </>
  )
}

export default AppointmentForm