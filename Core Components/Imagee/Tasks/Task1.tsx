import React from 'react';
import {View, Text, Image} from 'react-native';

export default function ImageTask1() {
    return (
    <View>
        <View>
            <Image 
            source={require("../../../assets/Img/Kurty.jpg")}
            style={{width:50, height: 50}}/>
            <Text> Hello This is me, my name is <Text>Kurt Allen A. Marquez</Text> </Text>
        </View>

        <View>
            <Image 
            source={{ uri: "https://i.pinimg.com/474x/79/9f/3d/799f3d596ad029759e9fc8272a522c26.jpg" }}
            style={{ width: 100, height: 100 }} /> 
            <Text> This is Uchiha Sasuke </Text>
        </View>
    </View>
    );
}