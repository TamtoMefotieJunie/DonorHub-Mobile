import React from 'react';
import { Text as RNText } from 'react-native';
import tw from 'twrnc';

const Text = ({ style, bold = false, ...props }) => {
    const textStyle = [
        { fontFamily: bold ? 'Merriweather-Bold' : 'Merriweather-Regular' }, 
        style
    ];
    
    return <RNText style={textStyle} {...props} />;
};

export default Text;