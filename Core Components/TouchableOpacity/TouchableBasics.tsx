import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

export default function TouchableOpacityBasics() {
    return (
        <View>
            <TouchableOpacity
            onPress={(() => Alert.alert("Hello Kurtyqt"))}>
                <Text> Hello Kurt </Text>
            </TouchableOpacity>
        </View>
    );
}