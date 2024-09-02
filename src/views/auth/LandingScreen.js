import React,{useState} from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import { Image } from 'react-native'
import Text from '../../components/DefaultText';
import FormInput from '../../components/inputs/FormInput'
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native'

const LandingScreen = () => {
    const [choice, setChoice] = useState(null);
    const navigation = useNavigation();
    const handleContinue = () => {
        navigation.navigate('Login', { choice });
        console.log('Handling login/registration for', choice);
      };
  return (
   <>
   <View style={tw `w-full p-3 h-full bg-[#e5e5e5]/30`}>
        <View style={tw`h-[35%] w-full p-5  bg-[#54C2B5] flex flex-col items-between gap-10 mt-10 shadow-lg rounded-10`}>
            <View style={tw `h-[50%]`} >
                <Image source={require("../../../assets/images/logo3.png")} 
              
                style={tw `w-[40%] h-[87%] rounded-full` }/>
            </View>
         <View>
         <Text style={tw ` text-4xl text-[#CF3304]`}>DONORHUB</Text>
         <Text style={tw ` text-lg text-white `} bold>Donate Blood Save Lives </Text>
         </View>

        </View>
        <Text style={tw ` text-lg mt-4 text-gray-400 ml-2`}>Select Your Role</Text>
        <View style={tw `flex flex-col rounded-lg  h-[27%] justify-between`}>
        <View style={tw `flex flex-row rounded-lg  h-full justify-around`} >
            <View style={tw `h-[95%] w-[47%]` } >
                <View style={tw ` h-[75%]`}>
                    <Text style={tw `text-sm ml-2`} bold>Donor</Text>
                    <ImageBackground source={require("../../../assets/images/donorwelcome.jpeg")} 
                    style={tw ` h-[95%] w-full`}
                    resizeMode='full'
                    />
                </View>
                <TouchableOpacity style={tw`self-start bg-[#CF3304] rounded-xl w-[65%] pt-1.5 mt-3 h-8`} onPress={() => setChoice('donor')} >
                    <Text style={tw `text-sm text-white text-center`} bold>CONTINUE</Text>
                </TouchableOpacity>
            </View>
            <View style={tw `h-[95%] flex flex-col w-[47%]` } >
               <View style={tw ` h-[75%]`}>
                 <Text style={tw `text-sm`} bold>Patient</Text>
                    <ImageBackground source={require("../../../assets/images/patient.jpg")} 
                        style={tw ` h-[95%] w-full`}
                        resizeMode='full'
                    />
               </View>
                <TouchableOpacity style={tw`self-end bg-[#CF3304]  rounded-xl w-[65%] pt-1.5 mt-3 h-8`} onPress={() => setChoice('patient')} >
                    <Text style={tw `text-sm  text-white text-center`} bold>CONTINUE</Text>
                </TouchableOpacity>
            </View>
           
        </View>
        <View style={tw `flex h-[82%] justify-center flex-row`}>
            <View style={tw `h-full w-[49%]` } >
                <View style={tw ` h-[75%]`}>
                <Text style={tw `text-sm`} bold>Lab Tech</Text>
                        <ImageBackground source={require("../../../assets/images/labtech.jpeg")} 
                        style={tw ` h-[95%] w-full`}
                        resizeMode='full'
                        />
                    </View>
                    <TouchableOpacity style={tw`self-center bg-[#CF3304] rounded-xl w-[65%] pt-1.5 mt-3 h-8`} onPress={() => setChoice('lab tech')} >
                        <Text style={tw `text-sm text-white text-center`} bold>CONTINUE</Text>
                    </TouchableOpacity>
            </View>
        </View>
        {choice && (
                <TouchableOpacity
                style={tw`absolute bottom-[-50] self-center right-7 bg-[#CF3304] rounded-xl w-[80%] pt-1.5 h-8`}
                onPress={handleContinue}
                >
                <Text style={tw`text-sm text-white text-center`} bold>
                    Continue as {choice}
                </Text>
                </TouchableOpacity>
            )}
        </View>        
    </View>
   </>
  )
}

export default LandingScreen