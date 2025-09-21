import React, {useState} from 'react';
import {View, Text, Button, Switch} from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default function SwitchBasics() {
    const [enabled, setEnabled] = useState<boolean>(false);

    return (
        <View>
            <Text> is the switch on? { enabled? "ON" : "OFF"}</Text>
            <Switch
            value={enabled}
            onValueChange={setEnabled}/>
        </View>
    )
}