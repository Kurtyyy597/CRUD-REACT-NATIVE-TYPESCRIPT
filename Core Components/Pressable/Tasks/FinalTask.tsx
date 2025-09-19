import React, { useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';

export default function PressableFinalTask() {
  const [mood, setMood] = useState<string>("");
  const [hourStudied, setHourStudied] = useState<number>(0);
  const [exerciseDone, setExerciseDone] = useState<boolean>(false);

  return (
    <View style={{ padding: 20 }}>

      {/* Mood Section */}
      <View style={{ marginBottom: 20 }}>
        <Text>Mood section</Text>

        <Pressable onPress={() => setMood("Happy")}>
          <Text>Happy Button</Text>
        </Pressable>

        <Pressable onPress={() => setMood("Sad")}>
          <Text>Sad Button</Text>
        </Pressable>

        <Pressable onPress={() => setMood("Excited")}>
          <Text>Excited Button</Text>
        </Pressable>
      </View>

      {/* Study Hours Counter */}
      <View style={{ marginBottom: 20 }}>
        <Text>Study Hours Counter</Text>

        <Button
          title="+1 hour"
          onPress={() => setHourStudied(hourStudied + 1)}
        />

        <Button
          title="-1 hour"
          onPress={() => setHourStudied(hourStudied > 0 ? hourStudied - 1 : 0)}
        />

        <Button
          title="Reset"
          onPress={() => setHourStudied(0)}
        />
      </View>

      {/* Exercise Section */}
      <View style={{ marginBottom: 20 }}>
        <Button
          title={exerciseDone ? "Exercise Done ✅" : "DID I EXERCISE TODAY?"}
          onPress={() => setExerciseDone(true)}
        />
      </View>

      {/* Preview Section */}
      <View>
        <Text>Preview</Text>
        <Text>Mood: {mood || "-"}</Text>
        <Text>Hours studied: {hourStudied}</Text>
        <Text>Exercise Done: {exerciseDone ? "Yes" : "No"}</Text>
      </View>

    </View>
  );
}
