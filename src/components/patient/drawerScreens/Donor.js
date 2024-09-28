import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View,Image, ImageBackground } from 'react-native'
import tw from "twrnc"
import ContactCard from '../cards/ContactCard'
import {MaterialIcons,MaterialCommunityIcons,FontAwesome6} from "@expo/vector-icons"
import { Modal } from 'react-native-paper'
import { Formik } from 'formik';
import * as Yup from 'yup';
import config from '../../../../config'
import TertiaryButton from '../../buttons/TertiaryButton'
import FormInput from '../../inputs/FormInput'



function Donor({navigation}) {
  const [donor, setDonor] = useState([
//     {
//       name:"Leonel Jugale",
//       numberUnRead:5,
//       image: <Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-19 w-20  rounded-full`}/>,
//       Address:"Melen",
//        bloodgroup:"A+"
//   },
//   {
//     name:"Richmond Ngwese",
//     numberUnRead:3,
//     image: <Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-19 w-20  rounded-full`}/>,
//     Address:"Melen",
//     bloodgroup:"A+"
// },
// {
//   name:"Franck cyrina",
//   numberUnRead:2,
//   image:<Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-19 w-20  rounded-full`}/>,
//   Address:"Melen",
//   bloodgroup:"A+"
// },
// {
//   name:"Seraphita Ange",
//   numberUnRead:3,
//   image: <Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-19 w-20  rounded-full`}/>,
//   Address:"Melen",
//   bloodgroup:"A+"
// },
// {
// name:"Daniel Ndabose",
// numberUnRead:2,
// image: <Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-19 w-20  rounded-full`}/>,
// Address:"Melen",
// bloodgroup:"A+"
// },
// {
//   name:"Auriol Sopning",
//   numberUnRead:3,
//   image: <Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-19 w-20  rounded-full`}/>,
//   Address:"Melen",
  
//   bloodgroup:"A+"
// },
// {
// name:"Samira Domche",
// numberUnRead:2,
// image: <Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-19 w-20  rounded-full`}/>,
// Address:"Melen",
//   bloodgroup:"A+"
// },
// {
//   name:"Nono Rufus",
//   numberUnRead:3,
//   image: <Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-19 w-20  rounded-full`}/>,
//   Address:"Melen",
// }

])
const API_URL = config.API_URL;
useEffect( () => {
fetch(`${API_URL}/auth/getAll/Role/${config.role}`,{
  method:"GET"
})
.then(async (response) => {
  if(response.ok){
    console.log("donors fetched successfully")
    const result = await response.json();
    console.log(result.data);
    setDonor(result.data)
  }
})
.catch((error)=>{
  console.log(error)
})
},[])
const [enteredDonor, setEnteredDonor] = useState("")
const handleSearchDonor = () => {}
const handleOpenSingleDonor = (donor) => {
  navigation.navigate("DonorScreen", {donor})
}
const [isPressed,setIsPressed] = useState(false)
const [modalOpen, setModalOpen] = useState(false);
const [selectedDonor, setSelectedDonor] = useState(null);
const [contactModalOpen, setContactModalOpen] = useState(false);
const [modalContent, setModalContent] = useState('MethodContent');

const handleOpenModal = (donor) => {
  setSelectedDonor(donor);
  setModalOpen(true);
};

const showModalWithMethodContent = () => {
  setModalContent('MethodContent');
  setContactModalOpen(true);
};
const showModalWithMessageContent = () => {
  setModalContent('MessageContent');
  setContactModalOpen(true);
};

const MethodContent = () => (
  <View style={tw`flex justify-center items-center`}>
    <Text style={tw`text-lg font-bold mb-7`}>Choose Contact Method</Text>
    <TouchableOpacity
      style={tw`p-2 w-full mb-2 rounded-lg bg-[#54C2B5]`}
      onPress={() => showModalWithMessageContent()}
    >
      <Text style={tw`text-center text-white text-4`}>Mail</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={tw`p-2 w-full rounded-lg bg-[#54C2B5]`}
      onPress={() => alert("Chat selected")}
    >
      <Text style={tw`text-center text-white text-4`}>Chat</Text>
    </TouchableOpacity>
  </View>
);
const MessageContent = () => (
  
  <Formik
    initialValues={{ message: '' }}
    onSubmit={(values) => {
      console.log('Form submitted with values:', values);
      const submittedValues = {
        message:values.message,
        email:selectedDonor.email
    };
      fetch(`${API_URL}/email/contact-friend`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedValues),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response);
        setContactModalOpen(false);
    })
    .catch(error => {
        Alert.alert('Error sending email:', error.message);
    });
      // showModalWithMethodContent();
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View>
        <Text style={tw`text-lg font-bold self-center`}>Message Content</Text>
        <FormInput
          placeholder="Enter your message"
          onChange={handleChange('message')}
          onBlur={handleBlur('message')}
          value={values.message}
        />
        {touched.message && errors.message && (
          <Text style={{ color: 'red' }}>{errors.message}</Text>
        )}
        <TertiaryButton name="Send" onPress={handleSubmit} />
      </View>
    )}
  </Formik>
);

  return (
    <>
    <View style={tw``}>
      
    <View style={tw`flex flex-row justify-between items-center`}>
      <Text style={tw`text-6 text-[#54C2B5] ml-4 mt-4 font-semibold text-center`}>Explore all donors</Text>
    </View>

    <ScrollView showsVerticalScrollIndicator={false} style={tw`h-full`}>
        {donor?.map((singleDonor, index) => (
          <ContactCard
            key={index}
            name={singleDonor.name}
            numberUnRead={singleDonor.numberUnRead}
            image={<Image source={require("../../../../assets/images/profile.png")} resizeMode="cover" style={tw `h-19 w-20  rounded-full`}/>}
            bloodgroup={singleDonor.bloodGroup}
            Address={singleDonor.address}
            onPress={() => handleOpenModal(singleDonor)}
          />
        ))}
      </ScrollView>
     
      <Modal
        visible={modalOpen}
        onDismiss={() => setModalOpen(false)}
        animationType="zoom"
      
      >
        <View style={tw`flex justify-center h-[120%] items-center bg-black bg-opacity-10`}>
          <View style={tw`bg-white absolute top-65 p-5 h-[34%] rounded-6 w-80`}>
            <TouchableOpacity onPress={() => setModalOpen(!modalOpen)}>
              <MaterialCommunityIcons name="close-circle" size={30} color="#CF3304" style={tw`text-right mb-2`} />
            </TouchableOpacity>
            {selectedDonor && (
              <View>
                <View  style={tw`text-right mb-4 flex flex-row justify-between items-center`}>
                  <View>
                  <Image 
                        source={
                          // selectedDonor.image ? { uri: selectedDonor.image} : 
                        require("../../../../assets/images/profile.png")} 
                        resizeMode="cover" 
                        style={tw`h-19 w-20 rounded-full`}
                    />
                    {/* {selectedDonor.image} */}
                  </View>
                  <View style={tw ` border-[#CF3304] pr-1 border items-center flex flex-row justify-center h-15 w-15 rounded-full`}>
                    <Text style={tw`text-6 font-bold`}> {selectedDonor.bloodGroup}</Text>
                   </View>
                 
                </View>
                <Text style={tw`text-lg font-bold mb-2`}>{selectedDonor.name}</Text>
                <View  style={tw`text-right mb-4 flex flex-row justify-start items-center`}>
                  <FontAwesome6 name="location-dot" size={24} color="#CF3304" />
                  <Text style={tw`text-4 font-semibold ml-4`}>{selectedDonor.address}</Text>
                </View>
                <TouchableOpacity
                    // onPress={onPress}
                    style={[
                      tw`p-2 w-[45%] h-[19%] rounded-5 self-end `,
                      isPressed ? tw`bg-[#FE3A3B] ` : tw` bg-white border border-[#CF3304]`,
                    ]}
                    activeOpacity={0.8}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                    onPress={() => {
                      setModalOpen(false); 
                      setContactModalOpen(true); 
                    }}
                    >
                        <Text style={[tw`text-4 text-center font-bold`,isPressed? tw `text-white` : tw `text-[#CF3304]`]}>Contact donor</Text>
                  </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
       {/* Second Modal for Contact Options */}
       <Modal
        visible={contactModalOpen}
        onDismiss={() => setContactModalOpen(false)}
        animationType="slide"
      >
        <View style={tw`flex justify-center h-[120%] items-center bg-black bg-opacity-10`}>
          <View style={tw`bg-white absolute top-70 p-5 h-[30%] rounded-6 w-80`}>
            <TouchableOpacity onPress={() => setContactModalOpen(false)}>
              <MaterialCommunityIcons name="close-circle" size={30} color="#54C2B5" style={tw`text-right mb-2`} />
            </TouchableOpacity>
            <View>
              
              {modalContent === 'MethodContent' && <MethodContent/>}
              {modalContent === 'MessageContent' && <MessageContent modalContent="This is Content B"/>}
           </View>
          </View>
        </View>
      </Modal>
    </View>
    </>
  );
}

export default Donor;