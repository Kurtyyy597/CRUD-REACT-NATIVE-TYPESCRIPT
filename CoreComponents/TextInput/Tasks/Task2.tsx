import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

export default function TextInputTask2() {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    return (
        <View>
            <View>
                <TextInput
                placeholder='Type your name'
                value={name}
                onChangeText={setName}/>

                <TextInput
                placeholder='Type your age'
                value={age.toString()}
                onChangeText={text => setAge(Number(text))}
                keyboardType='numeric'/>

                <Text> You are {name} and you are {age} years old </Text>


            </View>
        </View>
    )
}