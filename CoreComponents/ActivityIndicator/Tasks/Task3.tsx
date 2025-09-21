import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, Alert, TextInput, FlatList, Image } from 'react-native';

type Hobbies = {
  id: number;
  hobby: string;
};

export default function ActivityIndicatorTask3() {
  const [hobbies, setHobbies] = useState<Hobbies[]>([
    { id: 1, hobby: "Basketball" },
    { id: 2, hobby: "Studying Programming" },
    { id: 3, hobby: "Playing NBA 2K" },
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [section, setSection] = useState<string>("");
  const [religion, setReligion] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [picture, setPicture] = useState<any>(null);

  const fetchData = () => {
    if (!name.trim() || !age.trim() || !religion.trim() || !section.trim()) {
      Alert.alert(`Please enter valid information ${name}!`);
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      // Stop loading
      setLoading(false);

      // Display the message
      setMessage(`Name: ${name} - ${section}, Age: ${age}, Religion: ${religion}`);
      setPicture(require("../../../img/sasuke.jpg"));

      // Clear inputs AFTER setting message
      setName("");
      setAge("");
      setSection("");
      setReligion("");
    }, 5000);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Load this to get the information of the User!</Text>

      <View style={{ marginVertical: 10 }}>
        <TextInput
          placeholder="Type your name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Type your section"
          value={section}
          onChangeText={setSection}
        />

        <TextInput
          placeholder="Type your age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="What is your religion?"
          value={religion}
          onChangeText={setReligion}
        />

        <Button
          title="Click this to load and save the information!"
          onPress={fetchData}
        />
      </View>

      
      {loading && (
        <View style={{ marginVertical: 10 }}>
          <ActivityIndicator color="blue" size="large" />
          <Text>Hello {name}, please wait, loading...</Text>
        </View>
      )}
        
      
      {!loading && message.length > 0 && (
        <View style={{ marginVertical: 10 }}>

          <Text>Here are your information:</Text>
           {picture && (
            <Image
            source={require('../../../img/sasuke.jpg')}
            style={{height: 100, width: 100}}/>
          )}

          <Text>{message}</Text>
       

          <Text>Here are your hobbies:</Text>
          <FlatList
            data={hobbies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <Text>{index + 1}. {item.hobby}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
}
