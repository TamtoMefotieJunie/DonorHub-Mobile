import React, { useState } from 'react'
import {View, Text, TouchableOpacity} from "react-native"
import tw from "twrnc"
import { Modal } from "react-native";
import AppointControl from '../../buttons/AppointControl'
import {MaterialCommunityIcons,MaterialIcons,} from "react-native-vector-icons";
import FormInput from '../../inputs/FormInput';
import PrimaryButton from "../../buttons/PrimaryButton";
import DateTimePicker from '@react-native-community/datetimepicker';


function PatientRequest({patientImage,time, patientName, title, date,group}) {
    const [newdate, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [newtime, setTime] = useState(''); 

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
    const [ModalOpen,setModalOpen] = useState(false);
  return (
    <>
    <Modal
        visible={ModalOpen}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        BackgroundProps={{
            style: [
            tw`justify-center items-center`,
            { backgroundColor: '#00000080' },
          ]
          }}
    >
        <View style={tw`p-5 h-full bg-[#00000080]`}>
        
            <View style={tw`mt-45 bg-white p-5 shadow-2xl rounded-6 h-[60%] `}>
            <TouchableOpacity onPress={() => setModalOpen(!ModalOpen)}>
            <MaterialCommunityIcons name="close-circle" size={30} color="gray" style={tw`text-right mb-5`} />
            </TouchableOpacity>
            <Text style={tw`text-[#54C2B5] text-2xl text-center font-bold`}>RESCHEDULE</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)} style={tw`flex-row items-center`}>
            <FormInput
              placeholder={newdate.toLocaleDateString()}
              type="text"
              editable={false} 
              name="date"
              icon={<MaterialCommunityIcons name="calendar" size={24} color="black" style={tw`text-[#8B8989]`} />}
            />
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={newdate}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
          <FormInput
            placeholder="Time"
            type="text"
            name="time"
            onChangeText={setTime}
            icon={<MaterialCommunityIcons name="clock" size={24} color="gray" />}
          />

          <PrimaryButton name="SAVE" />
            </View>
      </View>
    </Modal>
   

        <View style={tw` mt-2 border-gray-200 rounded-5 bg-white`}>
            <View style={tw`flex pl-2 pr-2 flex-row justify-between bg-[#333]/10 rounded-t-5 items-center`}>
                <View style={tw `h-19 w-19 flex flex-row items-center justify-center rounded-full `}>
                    {patientImage}
                </View>
                <View style={tw`w-[75%] p-2 flex flex-row justify-between`}>
                    <Text style={tw`text-lg font-semibold`}>{patientName}</Text>
                    <Text style={tw`text-lg font-semibold`}>{group}</Text>
                </View>  
            </View>
  
            <View style={tw`p-4  rounded-5 bg-white`}>
                <View style={tw`w-full flex flex-col items-start justify-between`}>
                    <Text style={tw`text-lg font-semibold`}>{title}</Text>
                    <Text style={tw`text-4 font-400`}>{time}</Text>
                    <Text style={tw`text-4 font-400`}>{date}</Text>
                </View>
                <View style={tw`flex mt-3 flex-row justify-between items-center`}>
                    <TouchableOpacity style={tw`p-2 bg-[#CF3304] rounded-4 w-[30%]`}>
                        <Text style={tw`text-center text-white transition-all group-hover:scale-100 group-hover:bg-white/30 group relative overflow-hidden rounded-2xl font-bold text-white`}>Decline</Text>
                    </TouchableOpacity>
                    <AppointControl 
                        name="Accept"
                        status="active"
                        isControl={true}
                    />
                    <TouchableOpacity style={tw`p-2 bg-[#CF3304] rounded-4 w-[31%]`}
                    onPress={() => setModalOpen(!ModalOpen)}
                    >
                        <Text style={tw`text-center text-white transition-all group-hover:scale-100 group-hover:bg-white/30 group relative overflow-hidden rounded-2xl font-bold text-white`}>Reschedule</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        </>
)
}

export default PatientRequest