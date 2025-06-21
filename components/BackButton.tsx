import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="chevron-left" size={s(16)} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: s(40),
    height: s(40),
    borderRadius: s(20),
    backgroundColor: "#ecf0f4",
    justifyContent: "center",
    alignItems: "center",
  },
});
