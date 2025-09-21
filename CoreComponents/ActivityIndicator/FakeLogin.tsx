import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Alert,
  TextInput,
} from "react-native";

export default function ActivityIndicatorFakeLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const toggleButton = () => {
    if (!user.trim()) {
      Alert.alert("Validation Error", "⚠️ Please enter a valid username!");
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage(`✅ Hello ${user}, welcome to this page!`);
    }, 3000);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Fake Login Example 🚀
      </Text>

      <TextInput
        placeholder="Type your name!"
        value={user}
        onChangeText={setUser}
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
          padding: 10,
          width: 200,
          marginBottom: 15,
        }}
      />

      <Button title="Click this" onPress={toggleButton} disabled={loading} />

      {loading ? (
        <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />
      ) : (
        <Text style={{ marginTop: 20 }}>{message}</Text>
      )}
    </View>
  );
}
