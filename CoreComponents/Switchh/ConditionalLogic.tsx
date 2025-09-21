import React, { useState } from 'react';
import { View, Text, Button, Switch } from 'react-native';

export default function SwitchConditional() {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <View style={{ padding: 20 }}>
      <Text>This is Switch Conditional</Text>
      <Text>Is switch enabled? {isOn ? 'ON' : 'OFF'}</Text>

      <Switch
        value={isOn}
        onValueChange={setIsOn}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isOn ? '#f5dd4b' : '#f4f3f4'}
      />

      {isOn && (
        <Button
          title="Click me"
          onPress={() =>
            alert('Click me only if the switch is enabled')
          }
        />
      )}
    </View>
  );
}
