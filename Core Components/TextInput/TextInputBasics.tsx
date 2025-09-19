import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default function TextInputBasics() {
    return (
        <View>
            <View>
                <Text> This is TextInput Syntax </Text>
                <TextInput
                placeholder='Type Anything'/>
               
            </View>
        </View>
    )
}