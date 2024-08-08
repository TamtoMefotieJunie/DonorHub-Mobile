import { View, Text ,Image,ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react';

import tw from "twrnc"
import PostCard from '../cards/PostCard'

const Posts = () => {
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
      setCurrentTime(getCurrentTime());
  }, []);

  const getCurrentTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString();
  };

  
  return (
    <ScrollView>
      <View style={tw `bg-[#54C2B5]/5 w-full pl-5 pt-5 pr-5 h-900`}>
          <Text style={tw `text-2xl text-[#54C2B5] font-bold`}>Latest Updates</Text>
        
            <PostCard image={require("../../../../assets/images/bg main.jpeg")}
              content="If you have any questions or concerns about your donation,
              please don't hesitate to reach out to our dedicated support team.
              We're here to ensure your experience with DonerHub is seamless and transparent."
              time={currentTime}
            />
            <PostCard image={require("../../../../assets/images/bg8.jpeg")}
              content="If you have any questions or concerns about your donation,
              please don't hesitate to reach out to our dedicated support team.
              We're here to ensure your experience with DonerHub is seamless and transparent."
              time={currentTime}
            />
            <PostCard image={require("../../../../assets/images/bg7.jpeg")}
              content="If you have any questions or concerns about your donation,
              please don't hesitate to reach out to our dedicated support team.
              We're here to ensure your experience with DonerHub is seamless and transparent."
              time={currentTime}
            />
            <PostCard image={require("../../../../assets/images/bg1.jpeg")}
              content="If you have any questions or concerns about your donation,
              please don't hesitate to reach out to our dedicated support team.
              We're here to ensure your experience with DonerHub is seamless and transparent."
              time={currentTime}
            />
            <PostCard image={require("../../../../assets/images/bg3.jpeg")}
              content="If you have any questions or concerns about your donation,
              please don't hesitate to reach out to our dedicated support team.
              We're here to ensure your experience with DonerHub is seamless and transparent."
              time={currentTime}
            />
          
      </View>
    </ScrollView>
  )
}


export default Posts