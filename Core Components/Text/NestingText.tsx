import React from 'react';
import {View, Text} from 'react-native';

export default function TextNested() {
    return (
        <View>
            <Text> Hello this <Text> text </Text> is <Text> Nested</Text> </Text>
        </View>
    )
}