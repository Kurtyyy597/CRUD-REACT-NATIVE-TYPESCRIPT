import React from 'react';
import {View, Text} from 'react-native';

export default function ViewNested() {
    return (
    <View style={{ padding: 20, backgroundColor: "lightgray" }}>
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }}/>
        <Text> Hello pogi </Text>
        
    </View>
    )

}