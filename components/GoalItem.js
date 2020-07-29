import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = ({ item, id, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onDelete.bind(this, id)}>
      <View style={styles.goalList}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalList: {
    width: "100%",
    borderLeftWidth: 7,
    borderLeftColor: "black",
    padding: 25,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: "#eee",
  },
});
