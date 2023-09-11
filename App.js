import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/views/other/SplashScreen';
import LoginScreen from './src/views/auth/LoginScreen';
import RegisterScreen from './src/views/auth/RegisterScreen';
import Patient from './src/views/other/Patient';
import HealthProfessional from './src/views/other/HealthProfessional';
import ProfessionalStack from './src/views/other/ProfessionalStack';

export default function App() {
  return (
    <>
      <ProfessionalStack />
    </>
  );
}
