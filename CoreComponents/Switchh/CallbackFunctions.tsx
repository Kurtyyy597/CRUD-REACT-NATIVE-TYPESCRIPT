import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';

export default function SwitchCallback() {
    const [enabled, setEnabled] = useState<boolean>(false);

    const toggleButton = () => {
        setEnabled(prev => !prev);
        console.log(`Switch toggled!, current state:`, !enabled);
    };

    return (
        <View>
            <View>
                <Text> This is Switch with Conditional Statement</Text>
                <Text> Switch is on? {enabled ? "ON" : "OFF"} </Text>
                <Switch
                value={enabled}
                onValueChange={toggleButton}/>
            </View>
        </View>
    );

   
};