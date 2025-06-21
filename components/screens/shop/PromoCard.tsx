import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";

const PromoCard = ({
  title,
  buttonText,

  color,
}: {
  title: string;
  color: string;
  buttonText: string;
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text style={[styles.title]}>{title}</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text
          style={{
            color,
            fontWeight: "bold",
            letterSpacing: 1,
            fontSize: 12,
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromoCard;

const styles = StyleSheet.create({
  container: {
    padding: s(20),
    borderRadius: s(20),
    width: s(235),
    height: s(130),
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    color: "#fff",
    maxWidth: "80%",
    lineHeight: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
