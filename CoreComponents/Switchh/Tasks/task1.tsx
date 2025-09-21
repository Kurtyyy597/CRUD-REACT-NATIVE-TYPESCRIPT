import React, {useState} from 'react';
import {View, Text, TextInput, Button, Switch} from 'react-native';

export default function SwitchTask1() {
    const [enabled, setEnabled] = useState<boolean>(false);
    const [user, setUser] = useState<string>("");
    const [savedUser, setSavedUser] = useState<boolean>(false);

    const saveButton = () => {
        if (!user.trim()) {
            alert(`Please enter valid User`);
            return;
        };

        setSavedUser(true);
    }

    return (
        <View>
            <View>
                <TextInput
                placeholder='Type your name'
                value={user}
                onChangeText={setUser}/>

            </View>

            <View>
                <Text> is switch on? {enabled ? "OFF" : "OFF"} </Text>
                <Switch 
                value={enabled}
                onValueChange={setEnabled}/>

                <Button 
                title='Click to save profile'
                onPress={saveButton}/>

                {savedUser && (
                    <Text> Profile saved! {user}, switch: {enabled ? "ON" : "OFF"} </Text>
                )}

            </View>
        </View>
    )
}