import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

export default function TextInputTask1() {
    const [language, setLanguage] = useState<string>("");
    return (
        <View>
        <TextInput
        value={language}
        onChangeText={setLanguage}/>

        <Text> You favorite language is: {[language]} </Text>


        </View>
    )
}