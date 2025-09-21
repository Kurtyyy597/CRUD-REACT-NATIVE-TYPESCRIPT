import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  Alert,
  ActivityIndicator,
  Switch,
  Image,
} from 'react-native';

type User = {
  id: number;
  name: string;
  age: number;
  section: string;
  religion: string;
};

export default function SpreadLevel1Task2() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [religion, setReligion] = useState<string>('');
  const [picture, setPicture] = useState<any>(null);
  const [isOn, setIsOn] = useState<boolean>(false);

  const addDynamic = () => {
    if (!name.trim() || !section.trim() || !age.trim() || !religion.trim()) {
      Alert.alert('Please enter valid Information!');
      return;
    }

    setLoading(true);
    setMessage('');

    setTimeout(() => {
      setLoading(false);

      const newUser: User = {
        id: users.length + 1,
        name,
        age: Number(age),
        section,
        religion,
      };

      setUsers([...users, newUser]);
      setPicture(require('../../../img/sasuke.jpg')); 
      setAge('');
      setSection('');
      setReligion('');
      setMessage(`Hello ${name}!`);
      setName("");
      setIsOn(true);
    }, 3000); 
  };

  return (
    <View style={{ padding: 20 }}>
      
      <TextInput
        placeholder="Type your name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 5, padding: 5 }}
      />

      <TextInput
        placeholder="Type your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 5, padding: 5 }}
      />

      <TextInput
        placeholder="Type your section"
        value={section}
        onChangeText={setSection}
        style={{ borderWidth: 1, marginBottom: 5, padding: 5 }}
      />

      <TextInput
        placeholder="Type your religion"
        value={religion}
        onChangeText={setReligion}
        style={{ borderWidth: 1, marginBottom: 5, padding: 5 }}
      />

      
      {!loading && <Button title="Click this to add" onPress={addDynamic} />}

     
      {loading && (
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
          <ActivityIndicator size="large" color="blue" />
          <Text>Loading...</Text>
        </View>
      )}

     
      {!loading && users.length > 0 && (
        <View style={{ marginVertical: 10 }}>
          <View style={{ alignItems: 'center', marginBottom: 10 }}>
            {message.length > 0 && <Text>{message}</Text>}
            {picture && (
              <Image source={picture} style={{ height: 100, width: 100 }} />
            )}

            
            <Text>is switch on? {isOn ? 'YES' : 'NO'}</Text>
            <Switch
              value={isOn}
              onValueChange={setIsOn}
              trackColor={{ true: 'blue', false: 'red' }}
              thumbColor={isOn ? 'blue' : 'red'}
            />

            <Text> Total Users added: {users.length} </Text>
          </View>

          
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <Text>
                {index + 1}. {item.name}, Age: {item.age}, Section: {item.section}
                , Religion: {item.religion}
              </Text>
            )}
            ItemSeparatorComponent={() => (
              <Text>
                -----------------------------------------------------------------------
              </Text>
            )}
            ListHeaderComponent={<Text>This is the header!</Text>}
          />
        </View>
      )}
    </View>
  );
}
