import React from 'react';
import {View, Text, Image} from 'react-native';

export default function RemoteImage() {
    return (
        <View>
            <View>
                <Image 
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}/>
                <Text> Hello This is Remote Image </Text>
            </View>
        </View>
    )
}