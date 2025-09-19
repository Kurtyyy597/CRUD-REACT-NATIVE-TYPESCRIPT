import React from 'react';
import {View, Text, Image} from 'react-native';

export default function LocalImage() {
    return (
        <View>
            <Image 
            source={require("../../assets/Img/sasuke.jpg")}/>
            <Text> This is Uchiha Sasuke </Text>
        </View>
    );
}