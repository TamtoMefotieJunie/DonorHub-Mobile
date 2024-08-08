import React from 'react'
import { Text, View } from 'react-native'
import tw from "twrnc"
import SecondaryButton from '../../buttons/SecondaryButton'
import BloodCard from '../cards/BloodCard'
import { ScrollView } from 'react-native-gesture-handler'

function DetailHospital({navigation}) {
  return (
    <>
      <View style={tw`p-4`}>
       <Text style={tw `text-lg text-justify font-semibold`}>Stock Details</Text>
       <View style={tw `h-[90%] bg-white rounded-lg pt-3`}>
          <View style={tw `flex flex-row items-center justify-around`}>
            <Text  style={tw `text-4 font-semibold text-left`}>Type</Text>
            <Text  style={tw `text-4 font-semibold border-l-2 pl-2 text-right border-gray-300`}>Component</Text>
            <Text  style={tw `text-4 font-semibold border-l-2 pl-2 text-right border-gray-300`}>Quantity</Text>
            <Text  style={tw `text-4 font-semibold border-l-2 pl-2 text-right border-gray-300`}>Group</Text>
          </View>
          <View style={tw`h-[100%]`}>
            <ScrollView showsVerticalScrollIndicator={false} >
              <BloodCard type="Simple" component="RBC only"quantity={20} group="A+" navigation={navigation} />
              <BloodCard type="Double" component="RBC/Plasma"quantity={20} group="AB+" navigation={navigation} />
              <BloodCard type="Tripple" component="RBC/Platelets"quantity={20} group="B-" navigation={navigation}/>
              <BloodCard type="Simple" component="RBC"quantity={20} group="A+"navigation={navigation} />
              <BloodCard type="Simple" component="RBC only"quantity={20} group="A+" navigation={navigation} />
              <BloodCard type="Double" component="RBC/Plasma"quantity={20} group="AB+" navigation={navigation}/>
              <BloodCard type="Tripple" component="RBC/Platelets"quantity={20} group="B-" />
              <BloodCard type="Tripple" component="RBC/Platelets"quantity={20} group="B-" />
              <BloodCard type="Tripple" component="RBC/Platelets"quantity={20} group="B-" />

              
            </ScrollView>
          </View>

         
       </View>
      </View>
    </>
  )
}

export default DetailHospital