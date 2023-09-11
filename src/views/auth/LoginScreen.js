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
            <Image 
             source={require("../../../assets/images/login.png")}
             resizeMode="contain"
             style={tw`w-full h-50 mt-7`}
            />
            <Text style={tw`text-[#0C3778] text-left text-10 font-bold`}>Sign In</Text>
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
               placeholder="Email / Matricle"
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
                    <Text style={tw`text-4 text-right text-[#0C3778] font-semibold`}>Forgot password ?</Text>
             </TouchableOpacity>
               <PrimaryButton 
                name="Login"
                onPress={handleSubmit}
               />
               </>
                    )}
            </Formik>
               <View  style={tw`flex flex-row font-semibold justify-between items-center w-[50%] mt-5`}>
               <Text style={tw`text-5 font-semibold`}>New to iKare ? </Text>
                 <TouchableOpacity>
                    <Text style={tw`text-[#0C3778] font-semibold text-5`}>Register</Text>
                    </TouchableOpacity>
                </View>
             </View>
       </ScrollView>
    </>
  )
}

export default LoginScreen