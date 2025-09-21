import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//import SpreadLevel1Task1 from "./Spread/Level1 - Adding/Tasks/addingStatic";
import SpreadLevel1Task2 from "./Spread/Level1 - Adding/Tasks/task1";
//import SpreadDynamicAdding from "./Spread/Level1 - Adding/DynamicAdd";
//import SpreadLevel1Adding from "./Spread/Level1 - Adding/Adding";
//import SpreadwithArray from "./Spread/WithArray";
//import FlatListBasics from "./CoreComponents/FlatList/Basics";
//import ActivityIndicatorLastTask from "./CoreComponents/ActivityIndicator/Tasks/LastTask";
//import ActivityIndicatorTask3 from "./CoreComponents/ActivityIndicator/Tasks/Task3";
//import ActivityIndicatorTask2 from "./CoreComponents/ActivityIndicator/Tasks/Task2";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpreadLevel1Task2/>
    </SafeAreaView>
  );
}
