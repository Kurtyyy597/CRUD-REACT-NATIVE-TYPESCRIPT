import React, { useState } from 'react';
import { View, Text, Alert, Switch } from 'react-native';

export default function SwitchTask3() {
  const [master, setMaster] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [bluetooth, setBluetooth] = useState(false);
  const [notif, setNotif] = useState(false);

  const toggleMaster = () => {
    setMaster(prev => {
      const newMaster = !prev;
      Alert.alert(newMaster ? 'Master is ON' : 'Master is OFF');

      if (!newMaster) {
        setWifi(false);
        setBluetooth(false);
        setNotif(false);
      }

      return newMaster;
    });
  };

  const toggleWifi = () => {
    setWifi(prev => {
      const newWifi = !prev;
      Alert.alert(newWifi ? 'Wifi is ON' : 'Wifi is OFF');
      return newWifi;
    });
  };

  const toggleBluetooth = () => {
    setBluetooth(prev => {
      const newBluetooth = !prev;
      Alert.alert(newBluetooth ? 'Bluetooth is ON' : 'Bluetooth is OFF');
      return newBluetooth;
    });
  };

  const toggleNotif = () => {
    setNotif(prev => {
      const newNotif = !prev;
      Alert.alert(newNotif ? 'Notifications are ON' : 'Notifications are OFF');
      return newNotif;
    });
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Master */}
      <View>
        <Text>Master Area</Text>
        <Text>Is master on? {master ? 'ON' : 'OFF'}</Text>
        <Switch
          value={master}
          onValueChange={toggleMaster}
          trackColor={{ true: 'blue', false: 'red' }}
          thumbColor={master ? 'blue' : 'red'}
        />
      </View>

      {/* Child Switches */}
      <View style={{ marginTop: 20 }}>
        <Text>Child Switches</Text>

        <Text>WiFi: {wifi ? 'ON' : 'OFF'}</Text>
        <Switch
          value={wifi}
          onValueChange={toggleWifi}
          trackColor={{ true: 'blue', false: 'red' }}
          thumbColor={wifi ? 'blue' : 'red'}
          disabled={!master}
        />

        <Text>Bluetooth: {bluetooth ? 'ON' : 'OFF'}</Text>
        <Switch
          value={bluetooth}
          onValueChange={toggleBluetooth}
          trackColor={{ true: 'blue', false: 'red' }}
          thumbColor={bluetooth ? 'blue' : 'red'}
          disabled={!master}
        />

        <Text>Notifications: {notif ? 'ON' : 'OFF'}</Text>
        <Switch
          value={notif}
          onValueChange={toggleNotif}
          trackColor={{ true: 'blue', false: 'red' }}
          thumbColor={notif ? 'blue' : 'red'}
          disabled={!master}
        />
      </View>

      {/* Summary */}
      <View style={{ marginTop: 20 }}>
        <Text>Summary:</Text>
        <Text>Master: {master ? 'ON' : 'OFF'}</Text>
        <Text>WiFi: {wifi ? 'ON' : 'OFF'}</Text>
        <Text>Bluetooth: {bluetooth ? 'ON' : 'OFF'}</Text>
        <Text>Notifications: {notif ? 'ON' : 'OFF'}</Text>
      </View>
    </View>
  );
}
