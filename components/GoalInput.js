import React, { useState } from "react";
import { StyleSheet, TextInput, Button, Modal, View } from "react-native";

const GoalInput = (props) => {
  return (
    <Modal animationType="slide" visible={props.visibility}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Course Goals..."
          onChangeText={props.inputHandler}
          value={props.value}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.Btn}>
            <Button
              style={styles.inputBtn}
              title="ADD"
              onPress={props.showGoalHandler}
            />
          </View>
          <View style={styles.Btn}>
            <Button
              onPress={() => props.setisAddMode("false")}
              title="CANCEL"
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    width: "80%",
    borderBottomWidth: 1,
    padding: 15,
    marginBottom: 15,
    marginRight: 8,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  Btn: {
    width: 100,
  },
});
