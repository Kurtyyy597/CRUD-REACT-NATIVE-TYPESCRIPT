import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default function TouchableOpacityTask2() {
    const [mood, setMood] = useState<string>("");

    return (
        <View>
            <View>
                <Text> Current mood: {mood} </Text>
            </View>

            <View>
                <TouchableOpacity
                onPress={(() => setMood("happy"))}>
                    <Text> Happy </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={(() => setMood("Sad"))}>
                    <Text> Sad </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={(() => setMood("Excited"))}>
                    <Text> Excited</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

     