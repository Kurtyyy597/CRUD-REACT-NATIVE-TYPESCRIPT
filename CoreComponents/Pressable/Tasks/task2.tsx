import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import TextInputWithUseState from '../../TextInput/WithState';

export default function PressableTask2() {
    const [mood, setMood] = useState<string>("");
    const [count, setCount] = useState<number>(0);

    return(
        <View>
            <View>
                <Text> Mood Section </Text>
                <Pressable
                onPress={(() => setMood("Happy"))}>
                    <Text> Happy </Text>
                </Pressable>

                <Pressable
                onPress={(() => setMood("Sad"))}>
                    <Text> Sad </Text>
                </Pressable>

                <Pressable
                onPress={(() => setMood("Excited"))}>
                    <Text> Excited </Text>
                </Pressable>
            </View>

            <View>
                <Text> Counter Section </Text>
                <Pressable
                onPress={(() => setCount(count + 1))}>
                    <Text> Click to Add </Text>
                </Pressable>
                <Pressable
                onPress={(() => setCount(count > 0 ? count - 1 : 0))}>
                    <Text> Click to Minus </Text>
                </Pressable>

                <Pressable
                onPress={(() => setCount(0))}>
                    <Text> Reset </Text>
                </Pressable>
            </View>

            <View>
                <Text> Count: {count} </Text>
                <Text> Mood: {mood} </Text>
            </View>
        </View>
    )
}