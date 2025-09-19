import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function TouchableOpacityWithState() {
    const [count, setCount] = useState<number>(0);

    return (
        <View>
            <TouchableOpacity
            onPress={(() => setCount(count + 1))}>
                <Text> Increase Count </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={(() => setCount(count > 0 ? count - 1 : 0))}>
                <Text> Decrease Count </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={(() => setCount(0))}>
                <Text> Reset Button </Text>
            </TouchableOpacity>

            <Text> Count: {count} </Text>
        </View>
    )
}