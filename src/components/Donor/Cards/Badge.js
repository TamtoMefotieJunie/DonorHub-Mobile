import React from 'react';
import { ImageBackground } from 'react-native';
import { View,Image } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import tw from 'twrnc'; 
import styles from '../../../../assets/styles';
import Text from '../../DefaultText';

const Badge = ({ navigation }) => {
    const Circle = ({ style }) => {
        return <View style={[tw`w-20 h-20 rounded-full`, style]} />;
    };

    return (
        
       <>
            <View style={tw`flex-1 justify-center items-center bg-white`}>
                <View style={tw`absolute top-0 left-0`}>
                    <Circle style={tw`bg-blue-200`} />
                </View>
                <View style={tw`absolute bottom-0 right-0`}>
                    <Circle style={tw`bg-pink-200`} />
                </View>
                <View style={tw`absolute top-20 left-60 `}>
                    <Circle style={tw`bg-[#54C2B5]`} />
                </View>
                <View style={tw`absolute bottom-20 right-1/2 `}>
                    <Circle style={tw`bg-red-200`} />
                </View>
                <View style={tw`w-[90%] h-[40%] border-8 border-[#003366]/30 shadow shadow-[#003366]/30 p-3 rounded-lg `} >
                    <View style={tw`flex flex-row items-center justify-between`}>
                        <Image
                        source={require('../../../../assets/images/donorbadge.jpg')}
                        resizeMode='inherit'
                        style={tw `h-22 w-22 rounded-full`}/>
                
                        <Text style={tw `text-xl text-[#54C2B5]`} bold>Donor's Card</Text>
                    </View>
                    <Text style={tw ` text-4 my-4 text-justify`}>Mr/Mrs <Text bold >Tamto Junie </Text> receives this card to be used in any decentralized center of <Text bold>CHU</Text> for his/her active participation 
                        in saving lives
                    </Text>
                    <Text style={tw `self-end text-4`} bold>The head of Department</Text>
                </View>  
    
            </View>
        </>
    );
};

export default Badge;