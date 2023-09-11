import { Formik } from 'formik'
import React from 'react'
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import tw from "twrnc"
import FormInput from '../../components/inputs/FormInput'
import {MaterialIcons} from "@expo/vector-icons"
import { validationSchema } from '../../utils/validation/registerValidation'
import PrimaryButton from '../../components/buttons/PrimaryButton'

function RegisterScreen() {
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
        <ScrollView>
            <View style={tw`p-8`}>
                <Image 
                 source={require("../../../assets/images/splash2.png")}
                 resizeMode="cover"
                 style={tw`self-center w-full h-60`}
                />
                <Text style={tw`text-[#0C3778] text-left text-10 font-bold`}>Create Account</Text>
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
               <Text style={tw`text-5 font-semibold`}>Got an account ? </Text>
                 <TouchableOpacity>
                    <Text style={tw`text-[#0C3778] font-semibold text-5`}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </>
  )
}

export default RegisterScreen