import React, {useState} from 'react';
import {View, Text, Button, ActivityIndicator, TextInput} from 'react-native';

export default function ActivityIndicatorBasics() {
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [inputName, setInputName] = useState<string>("");

    const toggleLoading = () => {
        setLoading(true);
        setMessage("");
        setInputName("");

        setTimeout(() => {
            setLoading(false);
            setInputName(inputName);
            setMessage(`Hello ${inputName} Welcome to This page!`)
          
        }, 5000);
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text> This is for Activity Indicator </Text>
            <TextInput
            placeholder='Type Your name'
            value={inputName}
            onChangeText={setInputName}/>
            <Button 
            title='Click to start loading'
            onPress={toggleLoading}
            disabled={loading}/>

            {loading ? (
                <ActivityIndicator size={'large'} color={'blue'} animating={loading}/>
            ) : message === "Error" ? (
                <Text style={{marginTop: 20, color: "red"}}> Your loading is Error! </Text>
            ) : (
                <Text style = {{marginTop: 20}}> {message} </Text>
            )}
            
            
            </View>

    );

}
