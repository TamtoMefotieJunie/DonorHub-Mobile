import { View, Text,Image } from 'react-native'
import React from 'react'
import tw from "twrnc"

const PostCard = ({image,content,time}) => {
  return (
    
        <View style={tw `bg-[#E5E5E5] shadow-xl w-full mt-5 rounded-12 ml-0 mr-15 h-110`}>
            <Image
                source={image}
                resizeMode='contain'
                style={tw `w-full h-50 rounded-t-12 m-0 p-0 mt-0`}
            />
            <View style={tw `w-full rounded-b-12  text-justify text-xl p-3 h-[57%]`}>
                <Text style={tw `text-justify text-base`}>
                    {content}
                </Text>
                <Text style={tw `text-right absolute bottom-5 right-7 text-base`}>{time}</Text>
            </View>
        </View>

  )
}

export default PostCard

