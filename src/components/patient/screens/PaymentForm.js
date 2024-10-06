import React,{useState} from "react";
import { Formik } from 'formik';
import {MaterialIcons,MaterialCommunityIcons} from "@expo/vector-icons";
import PaymentInput from "../../inputs/PaymentInput";
import tw from "twrnc";
import { StyleSheet, Text,Image, View,TouchableOpacity } from 'react-native';
import { Modal } from 'react-native-paper'
import { validationSchema } from '../../../utils/validation/paymentValidation'
import FormInput from "../../inputs/FormInput";
import PrimaryButton from "../../buttons/PrimaryButton";
import {useRoute} from "@react-navigation/native"
import config from '../../../../config'


function PaymentForm(){
    const [modalOpen, setModalOpen] = useState(false);
    const API_URL = config.API_URL;
    const route = useRoute();
    if (!route.params) {
      console.error('No parameters provided to the route');
      return;
    }
    const { price } = route.params || { price: '0' };
    console.log('Price:', price); 
    const initialValues = {
       
        telephone: "",
        quantity: 1,
    }
    const onSubmit = (values) => {
        const submittedValues={
                "payment": {
                "amount": 2,
                "from": "+237" + values.telephone,
                "description": "reservation Payment",
                "currency": "XAF"
            }
        }
        fetch(`${API_URL}/payment/collect`, {
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
            return response.json(); 
           
        })
        .then(data => {
            console.log('Payment successful:', data);
   
            setModalOpen(true)
        })
        .catch(error => {
            Alert.alert('Error sending email:', error.message);
        });
       
        
    }

    
    return(
        
        <>  
      
            <View style={tw `p-5 rounded-lg w-full h-full`}>
                
            <View style={tw `ml-5.5`}>
                <Text style={tw `text-5xl pt-4 mb-2 text-[#CF3304] font-bold`}>DH</Text>
                <Text style={tw`text-[#808080] text-left text-5 absolute left-[-4] top-14 pl-1 font-bold`}>DonorHub</Text>
            </View>
            <Text style={tw `text-[30px] mb-7 pt-5 self-center text-[#54C2B5] font-bold`}>PAYMENT</Text>
            
            <Formik
                  initialValues={initialValues}
                  onSubmit={(values) => onSubmit(values)}
                  validationSchema={validationSchema}>
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        touched,
                        values,
                        errors
                       }) => (
                        <>
                          {
                            errors && 
                            (
                                errors.quantity && touched.quantity && values.quantity.trim().length == 0 ||
                                errors.telephone && touched.telephone && values.telephone.trim().length == 0
                            ) && <Text style={tw`text-red-600`}>* Required</Text>
                          }
               <PaymentInput 
                    Amount={price * values.quantity}
                /> 
                <FormInput 
                        placeholder="Quantity"
                        type="numeric"
                        value={values.quantity}
                        onChange={handleChange("quantity")}
                        onBlur={handleBlur("quantity")}
                        name="default"
                        icon={<MaterialIcons name="production-quantity-limits" size={24} style={tw`text-[#8B8989]`} />}
                    />
                    {
                        errors.quantity && touched.quantity && <Text style={tw`text-red-600 mt-2`}>{errors.quantity}</Text>
                    }
                    <FormInput 
                        placeholder="Telephone"
                        type="tel"
                        value={values.telephone}
                        onChange={handleChange("telephone")}
                        onBlur={handleBlur("telephone")}
                        name="phone-pad"
                        icon={<MaterialIcons name="phone" size={24} style={tw`text-[#8B8989]`} />}
                    />
                    {
                        errors.telephone && touched.telephone && <Text style={tw`text-red-600 mt-2`}>{errors.telephone}</Text>
                    }
               <PrimaryButton
                    onPress={handleSubmit}
                    name="PAY"  
               />
              </>
            )}
            </Formik>
            
                <View style={tw `flex-row pt-10 justify-center`}>
                <Text style={tw `text-[#000000] mr-3`}>Powered by</Text>
                <Image source={require('../../../../assets/images/orange.png')} style={{height:40, width:40}}/>
                        
                <Text style={tw `ml-3 mr-3`}></Text>
                <Image source={require('../../../../assets/images/Mtn.png')} />
                </View>
                <View >
                </View>
              </View>  
              <Modal
                    visible={modalOpen}
                    onDismiss={() => setModalOpen(false)}
                    animationType="slide"
                >
                    <View style={tw`flex justify-center h-[120%] items-center bg-black bg-opacity-10`}>
                    <View style={tw`bg-white absolute top-70 p-5 h-[20%] rounded-6 w-80`}>
                        <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <MaterialCommunityIcons name="close-circle" size={30} color="#54C2B5" style={tw`text-right mb-2`} />
                        </TouchableOpacity>
                        <View>
                        <Text style={tw `text-justify text-4`}>type #150*50# to confirm your transaction if you have not received the confirmation message</Text>
                    </View>
                    </View>
                    </View>
                </Modal>     
        </>
    );
} 
export default PaymentForm;