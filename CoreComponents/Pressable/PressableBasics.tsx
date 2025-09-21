import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';

export default function PressableBasics() {
    return (
        <View>
            <Pressable
            onPress={(() => Alert.alert("Hello Kurt"))}>
                <Text> Greet me </Text>
            </Pressable>
        </View>
    );
}