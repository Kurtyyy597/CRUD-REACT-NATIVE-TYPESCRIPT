import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

export default function TextInputWithUseState() {
    const [name, setName] = useState<string>("");

    return (
        <View>
            <View>
                <Text> This is TextInput with UseState </Text>
                <TextInput
                placeholder='Type your name'
                value={name}
                onChangeText={setName}/>
                <Text> You type: {name} </Text>
            </View>
        </View>
    )
}