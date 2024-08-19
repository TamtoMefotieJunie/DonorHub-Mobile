import React, { useState } from 'react';
import { View, Text, Button,TouchableOpacity, ImageBackground } from 'react-native';
import tw from 'twrnc';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import FormInput from '../../inputs/FormInput';
import PrimaryButton from '../../buttons/PrimaryButton';
import DateTimePicker from '@react-native-community/datetimepicker';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(''); 

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <>
    <ImageBackground
    resizeMode='inherit'
    source={require("../../../../assets/images/donation2.jpg")}
    >
      <View style={tw`p-5 h-full flex flex-row items-center justify-center`}>
        <View style={tw`bg-[#ffffff]/90 shadow-2xl w-full h-93 pt-8 pl-5 pr-5 rounded-5`}>
          <Text style={tw`text-[#54C2B5] text-xl text-center font-bold`}>
            SCHEDULE YOUR APPOINTMENT
          </Text>
          <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)} style={tw`flex-row items-center`}>
            <FormInput
              placeholder={date.toLocaleDateString()}
              type="text"
              editable={false} 
              name="date"
              icon={<MaterialCommunityIcons name="calendar" size={24} color="black" style={tw`text-[#8B8989]`} />}
            />
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
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
      </ImageBackground>
    </>
  );
};

export default Appointment;