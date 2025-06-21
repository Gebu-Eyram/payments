import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome name="send-o" size={s(12)} color="white" />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  container: {
    width: s(40),
    height: s(40),
    borderRadius: s(20),
    backgroundColor: "#229ED9",
    justifyContent: "center",
    alignItems: "center",
  },
});
