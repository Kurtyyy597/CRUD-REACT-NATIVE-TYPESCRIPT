import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwitchTask2 from './Core Components/Switchh/Tasks/Task2';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SwitchTask2 />
    </SafeAreaView>
  );
}
