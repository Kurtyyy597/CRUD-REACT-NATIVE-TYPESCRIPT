import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, ActivityIndicator, Alert } from 'react-native';

export default function ActivityIndicatorActivity1() {
  const [inputUser, setInputUser] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const toggleButton = () => {
    if (!inputUser.trim()) {
      Alert.alert("Validation Error", "Please enter a valid Username!");
      return;
    }

    setLoading(true);
    setMessage(""); // clear old message

    const username = inputUser; // ✅ save before clearing
    setInputUser("");

    setTimeout(() => {
      setLoading(false);
      setMessage(`Hello ${username}, Welcome Back!`);
    }, 3000);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text> Please Input what username you want! </Text>
      <TextInput
        placeholder="Type your username"
        value={inputUser}
        onChangeText={setInputUser}
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />

      <Button title="Click this to load" onPress={toggleButton} />

      <Text style={{ marginVertical: 10 }}> After you press the button it will load! </Text>

      <View style={{ marginTop: 20 }}>
        {loading && <ActivityIndicator size="large" color="blue" />}
        <Text>{message}</Text>

        <Text>Is Dark Mode on? {darkMode ? "ON" : "OFF"}</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ true: "blue", false: "red" }}
          thumbColor={darkMode ? "blue" : "red"}
        />
      </View>
    </View>
  );
}
