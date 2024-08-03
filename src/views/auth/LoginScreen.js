import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import loginImage from  "../../../assets/images/login.png"
import { Image } from 'react-native'
import { Text } from 'react-native'
import FormInput from '../../components/inputs/FormInput'
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"

function LoginScreen() {
    const validationSchema = Yup.object().shape({
        emailMatricle: Yup.string()
                        .required("*"),
        password: Yup.string()
                  .required("*")
    })
  const initialValues = {
    emailMatricle: "", password: ""
  }

  const onSubmit = (values) => {}

  return (
    <>
      <ScrollView>
         <View style={tw`p-8 flex flex-col justify-between h-full w-full`}>
            <View style={tw`bg w-100 flex flex-row`}>
              <Image 
              source={require("../../../assets/images/logo4.png")}
              resizeMode="contain"
              style={tw` w-50 h-50 mt-5`}
              />
              <View style>
                <Text style={tw`text-[#CF3304] text-center pt-17 text-15 absolute left-[-13] font-bold`}>DH</Text>
                <Text style={tw`text-[#808080] text-left text-5 absolute left-[-13] top-33 pl-1 font-bold`}>DonorHub</Text>
              </View>
            </View>
            <Text style={tw`text-[#54C2B5] text-center text-10 font-bold`}>Sign In</Text>
             <Formik
              onSubmit={(values) => onSubmit(values)}
              validationSchema={validationSchema}
              initialValues={initialValues}
             >
             {({
                    handleChange, 
                    handleBlur,
                    handleSubmit, 
                    touched,
                    values,
                    errors,
                    isValid}) => (
                <>
                {
                    errors.emailMatricle && errors.password && <Text style={tw`text-red-600`}>* Required</Text>
                }
              <FormInput 
               icon={<MaterialIcons name='email' size={24} style={tw`text-[#8B8989]`} />}
               name="default"
               value={values.emailMatricle}
               onBlur={handleBlur("emailMatricle")}
               onChange={handleChange("emailMatricle")}
               placeholder="Email"
              />
              {
                errors.emailMatricle && touched.emailMatricle && <Text style={tw`text-red-600 mb-3`}>{errors.emailMatricle}</Text>
              }
              <FormInput 
               icon={<MaterialIcons name='lock' size={24} style={tw`text-[#8B8989]`} />}
               type="password"
               value={values.password}
               onBlur={handleBlur("password")}
               onChange={handleChange("password")}
               placeholder="Password"
              />
              {
                errors.password && touched.emailMatricle && <Text style={tw`text-red-600 mb-3`}>{errors.password}</Text>
              }
             <TouchableOpacity style={tw`mt-5 w-full`}>
                    <Text style={tw`text-4 text-right text-[#54C2B5] font-semibold`}>Forgot password ?</Text>
             </TouchableOpacity>
               <PrimaryButton 
                name="Login"
                onPress={handleSubmit}
               />
               </>
                    )}
            </Formik>
               <View  style={tw`flex flex-row font-semibold justify-between items-center w-[50%] mt-5`}>
               <Text style={tw`text-5 w-53 text-[#808080] font-semibold`}>New to DonorHub ? </Text>
                 <TouchableOpacity>
                    <Text style={tw`text-[#54C2B5] font-semibold text-5`}>Register</Text>
                    </TouchableOpacity>
                </View>
             </View>
       </ScrollView>
    </>
  )
}

export default LoginScreen