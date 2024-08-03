import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/views/auth/LoginScreen';
import RegisterScreen from './src/views/auth/RegisterScreen';
import Patient from './src/views/other/Patient';
import HealthProfessional from './src/views/other/HealthProfessional';
import ProfessionalStack from './src/views/other/ProfessionalStack';
import PostCard from './src/components/patient/cards/PostCard';
import BankCard from './src/components/patient/cards/BankCard';

import PaymentForm from './src/components/patient/screens/PaymentForm';
import Posts from './src/components/patient/drawerScreens/Posts';
import Hospital from './src/components/patient/drawerScreens/Hospitals';

export default function App() {
  return (
    <>
      <Patient/>
      {/* <LoginScreen/> */}
      {/* <Hospital/> */}
      {/* <BankCard/> */}
      {/* <RegisterScreen/> */}
      {/* <PaymentForm/> */}
      {/* <PostCard/> */}
      {/* <Posts/> */}
    </>
  );
}
