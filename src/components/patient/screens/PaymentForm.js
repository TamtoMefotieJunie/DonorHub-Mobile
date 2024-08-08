import React from "react";
import {MaterialIcons} from "@expo/vector-icons";
import PaymentInput from "../../inputs/PaymentInput";
import tw from "twrnc";
import { StyleSheet, Text,Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {useForm} from "react-hook-form"
import FormInput from "../../inputs/FormInput";
import PrimaryButton from "../../buttons/PrimaryButton";


function PaymentForm(){
    
    return(
        <>  
            <View style={tw `p-5 rounded-lg w-full h-full`}>
            <View style={tw `ml-5.5`}>
                <Text style={tw `text-5xl pt-7 mb-5 text-[#CF3304] font-bold`}>DH</Text>
                <Text style={tw`text-[#808080] text-left text-5 absolute left-[-4] top-19 pl-1 font-bold`}>DonorHub</Text>
             
             </View>
            <Text style={tw `text-[30px] mb-7  pt-10 self-center text-[#54C2B5] font-bold`}>PAYMENT</Text>
         
               <PaymentInput 
                    Amount="25000"
                    />
                    {/* errors.telNumber && touched.telNumber && */}
                    {/* <Text style={tw`text-red-600 mt-2`}>errors.telNumber</Text> */}
                    
               <FormInput 
                    placeholder="Full Name"
                    type="text"
                    // value={values.fullName}
                    // onChange={handleChange("fullName")}
                    // onBlur={handleBlur("fullName")}
                    name="username"
                    icon={<MaterialIcons name="edit" size={24} style={tw`text-[#8B8989]`} />}
                    className="mb-15"
                />
                    {/* errors.telNumber && touched.telNumber && */}
                    {/* <Text style={tw`text-red-600 mt-2`}>errors.telNumber</Text> */}
                <FormInput 
                    placeholder="Telephone"
                    type="tel"
                    // value={values.telNumber}
                    // onChange={handleChange("telNumber")}
                    // onBlur={handleBlur("telNumber")}
                    name="phone"
                    icon={<MaterialIcons name="phone" size={24} style={tw`text-[#8B8989]`} />}
                />
                    {/* errors.telNumber && touched.telNumber && */}
                    {/* <Text style={tw`text-red-600 mt-2`}>errors.telNumber</Text> */}

               <PrimaryButton
                    // onPress={handleSubmit} 
                    name="PAY"  
               />
                <View style={tw `flex-row pt-15 justify-center`}>
                <Text style={tw `text-[#000000] mr-3`}>Powered by</Text>
                <Image source={require('../../../../assets/images/orange.png')} style={{height:40, width:40}}/>
                        
                <Text style={tw `ml-3 mr-3`}></Text>
                <Image source={require('../../../../assets/images/Mtn.png')} />
                </View>
                <View >
                </View>
              </View>
           
        </>
    );
} 
export default PaymentForm;