import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';

export default function ButtonTask2() {
    const [count, setCount] = useState<number>(0);

    return (
        <View>
            
            <Button
            title='Increase Count'
            onPress={(() => setCount(count + 1))}/>

            <Text> Count: {count} </Text>
            
            
        </View>
    )

}