import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

export default function ActivityIndicatorTask2() {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleButton = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Validation Error", "Please fill in all the fields!");
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);

      if (username === "admin" && password === "1234") {
        setMessage("✅ Login Successful, Welcome admin!");
      } else {
        setMessage("❌ Login Error, Credentials Invalid!");
      }
    }, 2000);
  };

  const resetAll = () => {
    setMessage("");
    setUserName("");
    setPassword("");
    setLoading(false);
    setShowPassword(false);
  };

  return (
    <View>
      {/* Username + Reset */}
      <View>
        <TextInput
          placeholder="Type your username!"
          value={username}
          onChangeText={setUserName}
        />
        {username.length > 0 && (
          <TouchableOpacity onPress={() => setUserName("")}>
            <Text>Reset Username</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Password + Toggle + Reset */}
      <View>
        <TextInput
          placeholder="Type your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text>{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>

        {password.length > 0 && (
          <TouchableOpacity onPress={() => setPassword("")}>
            <Text>Reset Password</Text>
          </TouchableOpacity>
        )}
      </View>

      
      <Button title="Login" onPress={toggleButton} disabled={loading} />

      
      {(username.length > 0 || password.length > 0 || message) && (
        <TouchableOpacity onPress={resetAll}>
          <Text>Reset All</Text>
        </TouchableOpacity>
      )}

      {/* Loader / Message */}
      <View>
        {loading && <ActivityIndicator size="large" />}
        <Text>{message}</Text>
      </View>
    </View>
  );
}
