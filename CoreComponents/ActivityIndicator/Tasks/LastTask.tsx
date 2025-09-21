import React, {useState} from 'react';
import {View, Text, Image, Button, TextInput, Alert, ActivityIndicator} from 'react-native'


export default function ActivityIndicatorLastTask() {
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [section, setSection] = useState<string>("")
    const [favoriteColor, setFavoriteColor] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [picture, setPicutre] = useState<any>(null);

    const toggleButton = () => {
        if (!name.trim() || !section.trim() || !favoriteColor.trim()) {
            Alert.alert(`Please fill out all fields ${name}!`);
            return;
        }
        setLoading(true);
        setMessage("");

        setTimeout(() => {
            setLoading(false);
            setMessage(`Name: ${name}, section: ${section}, age: ${age}, Favorite Color: ${favoriteColor}`)
            const color = favoriteColor.toLowerCase();
            if (color === "blue") setPicutre(require('../../../img/Blue.jpg'));
            if (color === "green") setPicutre(require('../../../img/green.jpg'));
            if (color === "yellow") setPicutre(require('../../../img/yellow.jpg'));
            
            setName("");
            setSection("");
            setFavoriteColor("");
            setAge("");
        }, 5000);
    }

    return (
        <View>
            <View>
                <TextInput 
                placeholder='Type your name'
                value={name} 
                onChangeText={setName}/>

                <TextInput 
                placeholder='How old are you?'
                value={age}
                onChangeText={setAge}
                keyboardType='numeric'/>

                <TextInput
                placeholder='Type your section'
                value={section}
                onChangeText={setSection}/>

                <TextInput 
                placeholder='Type your favorite color!'
                value={favoriteColor}
                onChangeText={setFavoriteColor}/>

                <Button 
                title='Click this to load your info!'
                onPress={toggleButton}/>

            </View>

            {loading && (
                <View> 
                <ActivityIndicator size={'large'} color={'blue'}/>
                <Text> Loading.... </Text>
                </View>
                
            )}

            {!loading && message.length > 0 && (
                <View>
                    <Text> Here are your information:</Text>
                    {picture && 
                        <Image
                        source={picture}
                        style={{height: 100, width: 100}}/>}
                        <Text> {message} </Text>
                    </View>
            )}

       

            
        </View>
    );
}
    

     
