import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

export default function ButtonTask1() {
    const name = "Kurt Marquez";
    return (
        <View>
            <Text> This is task 1 </Text>
            <Button
            title='Greet Me'
            onPress={(() => Alert.alert(`Hello ${name}!`))}/>
        </View>
    )
}