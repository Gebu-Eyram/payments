import Logo from "@/assets/Logo";
import SunLogo from "@/assets/SunIcon";
import React from "react";
import { StyleSheet, View } from "react-native";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <SunLogo style={styles.sunLogo} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sunLogo: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
