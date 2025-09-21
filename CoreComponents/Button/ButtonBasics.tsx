import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

export default function ButtonBasic() {
    return (
        <View>
            <Text> This is Button Syntax </Text>
            <Button
            title='Click me'
            onPress={(() => Alert.alert("Button pressed"))}/>
        </View>
    )
}