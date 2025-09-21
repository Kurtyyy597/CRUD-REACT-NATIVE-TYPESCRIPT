import React, { useState } from "react";
import { View, Text, Button, TextInput, Switch } from "react-native";

export default function SwitchTask2() {
  const [userInput, setUserInput] = useState<string>("");
  const [wifi, setWifi] = useState<boolean>(false);
  const [bluetooth, setBluetooth] = useState<boolean>(false);
  const [notif, setNotif] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const saveButton = () => {
    if (!userInput.trim()) {
      alert("Enter valid user");
      return;
    }
    setSaved(true); // don’t reset states here
  };

  return (
    <View>
      <TextInput
        placeholder="Type your name"
        value={userInput}
        onChangeText={setUserInput}
      />

      <Text>Is WiFi on? {wifi ? "ON" : "OFF"}</Text>
      <Switch value={wifi} onValueChange={setWifi} />

      <Text>Is Bluetooth on? {bluetooth ? "ON" : "OFF"}</Text>
      <Switch value={bluetooth} onValueChange={setBluetooth} />

      <Text>Is Notifications on? {notif ? "ON" : "OFF"}</Text>
      <Switch value={notif} onValueChange={setNotif} />

      <Button title="Save Profile" onPress={saveButton} />

      {saved && (
        <Text>
          Profile saved ✅ Name: {userInput}, is Bluetooth ON: {bluetooth? "ON": "OFF"}, is Wifi On: {wifi ? "ON" : "OFF"}, is Notif on? {notif ? "ON" : "OFF"}
        </Text>
      )}
    </View>
  );
}
