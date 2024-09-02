import { Formik } from 'formik'
import React, { useState, useRef } from 'react'
import { Image, Text, View, TouchableOpacity, ScrollView, Animated,Dimensions } from 'react-native'
import tw from "twrnc"
import FormInput from '../../components/inputs/FormInput'
import {MaterialIcons} from "@expo/vector-icons"
import { validationSchema } from '../../utils/validation/registerValidation'
import PrimaryButton from '../../components/buttons/PrimaryButton'

function RegisterScreen({currentScreen, targetScreen, navigation }) {
   
        const [animation] = React.useState(new Animated.Value(0));
      
        const handlePress = () => {
          Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            // Navigate to the target screen
            navigation.navigate('Login');
          });
        };
      
        const slideAnimation = {
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -Dimensions.get('window').width],
              }),
            },
          ],
        };

    const initialValues = {
        fullName: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
        telNumber: ""
    }
    const onSubmit = (values) => {}
  return (
    <>
         <Animated.View style={[tw`absolute top-0 left-0 right-0 bottom-0`, slideAnimation]}>
        <ScrollView>
            <View style={tw`pt-0 pl-5 pr-5`}>
                <Image 
                 source={require("../../../assets/images/im6.jpg")}
                 resizeMode="cover"
                 style={tw`self-center w-100 h-60`}
                />
                <Text style={tw`text-[#54C2B5] text-9 text-center font-bold`}>Sign Up</Text>
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
                                errors.fullName && touched.fullName && values.fullName.trim().length == 0 ||
                                errors.emailAddress && touched.emailAddress && values.emailAddress.trim().length == 0 ||
                                errors.telNumber && touched.telNumber && values.telNumber.trim().length == 0 ||
                                errors.password && touched.password && values.password.trim().length == 0 ||
                                errors.bloodGroup && touched.bloodGroup && values.bloodGroup.trim().length == 0 ||
                                errors.confirmPassword && touched.confirmPassword && values.confirmPassword.trim().length == 0
                            ) && <Text style={tw`text-red-600`}>* Required</Text>
                          }
                            <FormInput 
                              placeholder="Full Name"
                              type="text"
                              value={values.fullName}
                              onChange={handleChange("fullName")}
                              onBlur={handleBlur("fullName")}
                              name="default"
                              icon={<MaterialIcons name="edit" size={24} style={tw`text-[#8B8989]`} />}
                            />
                            {
                                errors.fullName && touched.fullName && <Text style={tw`text-red-600 mt-2`}>{errors.fullName}</Text>
                            }
                            <FormInput 
                              placeholder="Email Address"
                              type="text"
                              value={values.emailAddress}
                              onChange={handleChange("emailAddress")}
                              onBlur={handleBlur("emailAddress")}
                              name="email-address"
                              icon={<MaterialIcons name="email" size={24} style={tw`text-[#8B8989]`} />}
                            />
                            {
                                errors.emailAddress && touched.emailAddress && <Text style={tw`text-red-600 mt-2`}>{errors.emailAddress}</Text>
                            }
                            <FormInput 
                                placeholder="Telephone"
                                type="tel"
                                value={values.telNumber}
                                onChange={handleChange("telNumber")}
                                onBlur={handleBlur("telNumber")}
                                name="phone-pad"
                                icon={<MaterialIcons name="phone" size={24} style={tw`text-[#8B8989]`} />}
                            />
                            {
                                errors.telNumber && touched.telNumber && <Text style={tw`text-red-600 mt-2`}>{errors.telNumber}</Text>
                            }
                            <FormInput 
                                placeholder="Blood Group"
                                type="text"
                                value={values.bloodGroup}
                                onChange={handleChange("bloodGroup")}
                                onBlur={handleBlur("bloodGroup")}
                                name="blood-group"
                                icon={<MaterialIcons name="bloodtype" size={24} style={tw`text-[#8B8989]`} />}
                            />
                            {
                                errors.bloodGroup && touched.bloodGroup && <Text style={tw`text-red-600 mt-2`}>{errors.bloodGroup}</Text>
                            }
                            <FormInput 
                                 placeholder="Password"
                                 type="password"
                                 value={values.password}
                                 onChange={handleChange("password")}
                                 onBlur={handleBlur("password")}
                                 name="default"
                                 icon={<MaterialIcons name="lock" size={24} style={tw`text-[#8B8989]`} />}
                            />
                            {
                                errors.password && touched.password && <Text style={tw`text-red-600 mt-2`}>{errors.password}</Text>
                            }
                            <FormInput 
                                 placeholder="Confirm Password"
                                 type="password"
                                 value={values.confirmPassword}
                                 onChange={handleChange("confirmPassword")}
                                 onBlur={handleBlur("confirmPassword")}
                                 name="default"
                                 icon={<MaterialIcons name="lock" size={24} style={tw`text-[#8B8989]`} />}
                            />
                            {
                                errors.confirmPassword && touched.confirmPassword && <Text style={tw`text-red-600 mt-2 mb-2`}>{errors.confirmPassword}</Text>
                            }
                            <PrimaryButton 
                                name="Register"
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                 </Formik>
                
                 <View  style={tw`flex flex-row font-semibold justify-between items-center w-[50%] mt-5`}>
               <Text style={tw`text-5 w-63 text-[#808080] font-semibold`}> Have an account ? </Text>
               <TouchableOpacity
                    style={tw``}
                    onPress={handlePress}
                >
                    <Text style={tw`text-[#CF3304] font-semibold text-5`}>Login </Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        </Animated.View>
    </>
  )
}

export default RegisterScreen