import React from 'react';
import { StyleSheet, TextInput,Image, Text, View } from 'react-native';
import tw from "twrnc";


function PaymentInput({Amount}){
    const validationColor = '#223e4b';
    return(
    <>  
    
        <View style={tw `w-[100%] border h-[63px] bg-[#E8E4E4] flex-row rounded-4 border-[#D9D9D9]/70`}>
            <View style={tw `mt-3 border-r-2 pr-3 h-[65%] border-[#D9D9D9] flex-row ml-2`}>
            <Image source={require('../../../assets/images/emojione_flag-for-cameroon.png')}/>
            <Text style={tw`mt-2.5 ml-2`}>XAF</Text></View>
            <Text style={[tw `rounded-4  p-5 drop-shadow-md border-box border-none h-[60px] w-[100%]`]}>{Amount}</Text>
        </View>
    </>
    );

    
} 

export default PaymentInput