import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import tw from "twrnc"
import { Image } from 'react-native'
import { Text } from 'react-native'
import FormInput from '../../components/inputs/FormInput'
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import { useRoute } from '@react-navigation/native';
// import {API_URL} from "@env"
import config from '../../../config'

function LoginScreen({navigation}) {
  console.log('API URL:', config);
  
  const route = useRoute();
  if (!route.params) {
    console.error('No parameters provided to the route');
    return;
}
const { id } = route.params; 
console.log('Current route:', route);
console.log('Route parameters:', route.params);
    const validationSchema = Yup.object().shape({
        email: Yup.string()
                        .required("*"),
        password: Yup.string()
                  .required("*")
    })
  const initialValues = {
    email: "", password: ""
  }

  const API_URL = config.API_URL;
  const onSubmit = (values) => {
    console.log("string");
    let body = JSON.stringify(values);
    console.log("Sending request to:", `${API_URL}/user/login`, "with body:", body);
    const submittedValues = {
      ...values,
      role: id
  };
    fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(submittedValues)
  })
  .then(async (response) => {
      if (response.ok) {
          console.log("User logged in successfully");
          const data = await response.json(); 
          const roleName = data.user.role.name;
          if(roleName === 'Donor'){
          navigation.navigate('donor',id); 
          }else if(roleName === 'Patient'){
            navigation.navigate('patient',id); 
          }else{
            navigation.navigate('technician',id); 
          }

            
      } else {
          const errorMessage = await response.text();
          console.log("login failed:", errorMessage);
      }
  })
  .catch((error) => {
      console.log("Error:", error);
  });
  }

  return (
    <>
      <ScrollView>
         <View style={tw`p-8 flex flex-col justify-between h-full w-full`}>
            <View style={tw` w-100 flex flex-row`}>
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
            <Text style={tw`text-[#54C2B5] text-center text-4xl font-bold`}>Sign In</Text>
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
                    errors.email && errors.password && <Text style={tw`text-red-600`}>* Required</Text>
                }
              <FormInput 
               icon={<MaterialIcons name='email' size={24} style={tw`text-[#8B8989]`} />}
               name="default"
               value={values.email}
               onBlur={handleBlur("email")}
               onChange={handleChange("email")}
               placeholder="Email"
              />
              {
                errors.email && touched.email && <Text style={tw`text-red-600 mb-3`}>{errors.email}</Text>
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
                errors.password && touched.password && <Text style={tw`text-red-600 mb-3`}>{errors.password}</Text>
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
               <Text style={tw`text-lg w-53 text-[#808080] font-semibold`}>New to DonorHub ? </Text>
                 <TouchableOpacity onPress={() => navigation.navigate("register",{ id })}>
                    <Text style={tw`text-[#54C2B5] font-semibold text-lg`}>Register</Text>
                    </TouchableOpacity>
                </View>
             </View>
       </ScrollView>
    </>
  )
}

export default LoginScreen