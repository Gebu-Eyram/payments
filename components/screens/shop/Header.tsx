import Fries from "@/components/icons/Fries";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Fries width={24} height={24} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: s(40),
    padding: s(16),
  },
  title: {
    fontSize: s(24),
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#D9D9D940",
    height: s(36),
    width: s(36),
    borderRadius: s(18),
    alignItems: "center",
    justifyContent: "center",
  },
});
