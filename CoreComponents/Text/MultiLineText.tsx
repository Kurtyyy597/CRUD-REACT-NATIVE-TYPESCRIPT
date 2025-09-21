import React from 'react';
import {View, Text} from 'react-native';

export default function MultiLineText() {
    return (
        <View>
            <Text>
                First Line {"\n"}
                Second Line
            </Text>
        </View>
    )
}