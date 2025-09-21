import React from 'react';
import {View, Text, Image} from 'react-native';

export default function ImageTask2() {
    return (
        <View>
            <View> 
            <Image
            source={require("../../../assets/Img/Kurty.jpg")}
            style={{height:100, width: 100}}/>
            <Text> Hello This is me. </Text>
            </View>

            <View>
                <Image
                source={{uri: "https://i.pinimg.com/474x/79/9f/3d/799f3d596ad029759e9fc8272a522c26.jpg"}}
                style={{height: 100, width: 100}}/>
                <Text> This is Uchiha Sasuke and this is only uri </Text>
            </View>

            <View>
                <Image
                source={{uri: "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/64202805dcfea1001d0b7a1a.jpg"}}
                style={{height: 100, width: 100}}/>
                <Text> This is Uchiha Itachi, brother of Sasuke Uchiha </Text>
            </View>
        </View>
    );

}