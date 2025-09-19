import React, {useState} from 'react';
import {View, Text, Button,} from 'react-native';

export default function ButtonTask4() {
    const [count, setCount] = useState<number>(0);
    return (
        <View>
            <Button
            title='Increase'
            onPress={(() => setCount(count+1))}/>

            <Button
            title='Decrease'
            onPress={() => setCount(count > 0 ? count - 1 : 0)}/>

            <Button
            title='Reset Button'
            onPress={(() => setCount(0))}/>

            <Text> You count: {count} </Text>
        </View>
    )
}