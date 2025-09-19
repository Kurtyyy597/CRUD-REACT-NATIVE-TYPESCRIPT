import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

export default function PressableTask1() {
    const [count, setCount] = useState<number>(0);

    return (
        <View>
            <View>
                <Text> COUNT: {count} </Text>
            </View>

            <View>
                <Pressable
                onPress={(() => setCount(count + 1))}>
                    Increase
                </Pressable>

                <Pressable
                onPress={(() => setCount(count > 0 ? count - 1 : 0))}>
                    <Text> Decrease </Text>
                </Pressable>

                <Pressable
                onPress={(() => setCount(0))}>
                    <Text> Reset </Text>
                </Pressable>
            </View>
        </View>
    )
}