import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function DailyRoutineTracker() {
  const [task1Done, setTask1Done] = useState(false);
  const [task2Done, setTask2Done] = useState(false);
  const [task3Done, setTask3Done] = useState(false);
  const [task4Done, setTask4Done] = useState(false);
  const [task5Done, setTask5Done] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const countCompletedTasks = () => {
    let count = 0;
    if (task1Done) count++;
    if (task2Done) count++;
    if (task3Done) count++;
    if (task4Done) count++;
    if (task5Done) count++;
    setCompletedCount(count);
  };

  const resetAllTasks = () => {
    setTask1Done(false);
    setTask2Done(false);
    setTask3Done(false);
    setTask4Done(false);
    setTask5Done(false);
    setCompletedCount(0);
  };

  return (
    <View>

      {/* Tasks Section */}
      <Text>Daily Tasks</Text>

      <Pressable onPress={() => setTask1Done(!task1Done)}>
        <Text>Wake up early ({task1Done ? 'Done' : 'Not Done'})</Text>
      </Pressable>

      <Pressable onPress={() => setTask2Done(!task2Done)}>
        <Text>Exercise ({task2Done ? 'Done' : 'Not Done'})</Text>
      </Pressable>

      <Pressable onPress={() => setTask3Done(!task3Done)}>
        <Text>Study ({task3Done ? 'Done' : 'Not Done'})</Text>
      </Pressable>

      <Pressable onPress={() => setTask4Done(!task4Done)}>
        <Text>Read ({task4Done ? 'Done' : 'Not Done'})</Text>
      </Pressable>

      <Pressable onPress={() => setTask5Done(!task5Done)}>
        <Text>Sleep on time ({task5Done ? 'Done' : 'Not Done'})</Text>
      </Pressable>

      {/* Counter Section */}
      <Pressable onPress={countCompletedTasks}>
        <Text>Count Completed Tasks</Text>
      </Pressable>

      {/* Reset Section */}
      <Pressable onPress={resetAllTasks}>
        <Text>Reset All</Text>
      </Pressable>

      {/* Summary Section */}
      <Text>Summary</Text>
      <Text>Wake up early: {task1Done ? 'Done' : 'Not Done'}</Text>
      <Text>Exercise: {task2Done ? 'Done' : 'Not Done'}</Text>
      <Text>Study: {task3Done ? 'Done' : 'Not Done'}</Text>
      <Text>Read: {task4Done ? 'Done' : 'Not Done'}</Text>
      <Text>Sleep on time: {task5Done ? 'Done' : 'Not Done'}</Text>
      <Text>Total Completed Tasks: {completedCount}</Text>

      {completedCount === 5 && <Text>Congratulations! All tasks completed ✅</Text>}

    </View>
  );
}
