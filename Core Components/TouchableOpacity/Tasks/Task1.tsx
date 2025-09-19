import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

export default function TouchableOpacityTask1() {
    const [food, setFood] = useState<string>("");
    const [movie, setMovie] = useState<string>("");

    return (
        <View>
            <View>
                <TextInput
                placeholder='Type your favorite food'
                value={food}
                onChangeText={setFood}/>

                <TextInput
                placeholder='Type your favorite movie'
                value={movie}
                onChangeText={setMovie}/>
            </View>

            <View>
                <TouchableOpacity
                onPress={(() => Alert.alert(`Your favorite food is ${food} `) )}>
                    <Text> Show Food </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={(() => Alert.alert(`Your favorite movie is ${movie}`))}>
                    <Text> Show favorite Movie </Text>
                </TouchableOpacity>
            </View>
        </View>
    );


}