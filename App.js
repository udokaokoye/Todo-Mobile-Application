import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [EnterGoal, setEnterGoal] = useState("");
  const [courseGoals, setcourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };

  const showGoalHandler = () => {
    if (EnterGoal != "") {
      setcourseGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: EnterGoal },
      ]);
      setisAddMode(false);
      setEnterGoal("");
    } else {
      alert("Please Enter A Goal");
    }
  };

  const removeGoalHandler = (goalId) => {
    setcourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <Button title={"Add New Goal!"} onPress={() => setisAddMode(true)} />
      <GoalInput
        showGoalHandler={showGoalHandler}
        inputHandler={goalInputHandler}
        visibility={isAddMode}
        setisAddMode={setisAddMode}
        value={EnterGoal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={removeGoalHandler}
            item={itemData.item.value}
            id={itemData.item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
  },
});
