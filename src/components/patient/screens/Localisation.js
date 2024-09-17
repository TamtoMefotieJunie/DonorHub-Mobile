import React from 'react';
import { SafeAreaView } from 'react-native';
import Map from './Map';
import { useRoute } from '@react-navigation/native';

function Localisation() {
 const route = useRoute();
 if (!route.params) {
    console.error('No parameters provided to the route');
    return;
  }
  
  const { hospitalLatitude, hospitalLongitude } = route.params;

  console.log('Hospital Latitude:', hospitalLatitude);
  console.log('Hospital Longitude:', hospitalLongitude);
    const initialRegion = {
      latitude: hospitalLatitude,
      // 37.78825, // Initial latitude
      longitude: hospitalLongitude,
      // -122.4324, // Initial longitude
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  };

  return (
      <SafeAreaView style={{ flex: 1 }}>
          <Map initialRegion={initialRegion} />
      </SafeAreaView>
  );
 
}

export default Localisation