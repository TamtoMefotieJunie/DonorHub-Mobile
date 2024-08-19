import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/views/auth/LoginScreen';
import RegisterScreen from './src/views/auth/RegisterScreen';
import Patient from './src/views/other/Patient';
import HealthProfessional from './src/views/other/HealthProfessional';
import Technician from './src/views/other/LabTechnician';
import PostCard from './src/components/patient/cards/PostCard';
import BankCard from './src/components/patient/cards/BankCard';
import PaymentForm from './src/components/patient/screens/PaymentForm';
import Posts from './src/components/patient/drawerScreens/Posts';
import Hospital from './src/components/patient/drawerScreens/Hospitals';
import DetailDoctor from './src/components/patient/screens/DetailDoctor'
import DetailHospital from './src/components/patient/screens/DetailHospital';
import SuccessCard from './src/components/professional/cards/SuccessCard';
import Donor from './src/views/other/Donor';
import AppointmentForm from './src/components/Donor/Screens/Appointment';
import DonorNotification from './src/components/Donor/Screens/DonorNotification';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import tw from 'twrnc'; // or your Tailwind setup
import { useEffect,useState } from 'react';

SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    'Merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf'),
    'Merriweather-Bold': require('./assets/fonts/Merriweather-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading spinner, etc.
  }

  return (
    <>
      <Donor />
      {/* <DonorNotification/> */}
      {/* <AppointmentForm/> */}
      {/* <Technician/> */}
      {/* <SuccessCard/> */}
      {/* <Patient/> */}
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
