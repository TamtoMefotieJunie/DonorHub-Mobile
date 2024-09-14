import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import tw from "twrnc"
import BloodCard from '../cards/BloodCard'
import { ScrollView } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native';
import config from '../../../../config'

function DetailHospital({ navigation }) {
  const [bloodPacks, setBloodPacks] = useState([]);
  const [aggregation, setAggregation] = useState([]);
  const route = useRoute();
  if (!route.params) {
    console.error('No parameters provided to the route');
    return;
  }
  const { hospitalId } = route.params; 
  console.log('Route parameters:', route.params);
  const API_URL = config.API_URL;;
  useEffect(() => {
    console.log("string");
    fetch(`${API_URL}/blood/hospital/allpacks/${hospitalId}`, {
      method: "GET",
    })
      .then(async (response) => {
        if (response.ok) {
          console.log("bloodpack fetched successfully");
          const result = await response.json();
          console.log(result)
          console.log('The data is',result.data);
          setBloodPacks(result.data);
          setAggregation(result.aggregation);
          result.aggregation.forEach(agg => {
            console.log(`Count for ${agg._id.components} - ${agg._id.group}: ${agg.count}`);
          });

        } else {
          const errorMessage = await response.text();
          console.log("fetch failed:", errorMessage);
        }
      })
  }, [])
const aggregatedBloodPacks = bloodPacks.reduce((acc, pack) => {
  const existingPack = acc.find(item => item.components === pack.components && item.group === pack.group);
  if (existingPack) {
      existingPack.quantity += 1; 
  } else {
      acc.push({ ...pack, quantity: 1 });
  }
  return acc;
}, []);

const handlePaymentForSingleHospital = (price) => {
   navigation.navigate("Payment",{price});

}

  return (
    <>
      <View style={tw`p-4`}>
        <Text style={tw`text-lg text-justify font-semibold`}>Stock Details</Text>
        <View style={tw`h-[90%] bg-white rounded-lg pt-3`}>
          <View style={tw`flex flex-row items-center justify-around`}>
            <Text style={tw`text-4 font-semibold text-left`}>Type</Text>
            <Text style={tw`text-4 font-semibold border-l-2 pl-2 text-right border-gray-300`}>Component</Text>
            <Text style={tw`text-4 font-semibold border-l-2 pl-2 text-right border-gray-300`}>Quantity</Text>
            <Text style={tw`text-4 font-semibold border-l-2 pl-2 text-right border-gray-300`}>Group</Text>
          </View>
          <View style={tw`h-[100%]`}>
            <ScrollView showsVerticalScrollIndicator={false} >
              {aggregatedBloodPacks.length === 0 ? (
                <Text style={tw`text-5 font-semibold text-center mt-10`}>No blood found in this hospital</Text>
              ) : (
                aggregatedBloodPacks.map((pack, index) => {
                  const agg = aggregation.find(agg => agg._id.components === pack.components && agg._id.group === pack.group);
                  const quantity = agg ? agg.count : 0; 
                  return (
                      <BloodCard
                          key={index}
                          component={pack.components}
                          type={pack.type}
                          group={pack.group}
                          quantity={quantity}
                          onPress2={() => handlePaymentForSingleHospital(pack.price)}
                          navigation={navigation}
                      />
                );
              })
            )}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  )
}

export default DetailHospital