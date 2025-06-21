import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s } from "react-native-size-matters";
import SendButton from "./SendButton";
import SocialCircle from "./SocialCircle";

const SocialSection = ({
  social,
}: {
  social: "whatsapp" | "twitter" | "instagram" | "telegram";
}) => {
  return (
    <View style={styles.container}>
      <SocialCircle social={social} />
      <Text style={styles.socialText}>{social}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#e4e6e8",
    paddingVertical: s(15),
    borderBottomWidth: s(1),
  },
  socialText: {
    marginStart: s(14),
    fontSize: s(12),
    flex: 1,
    textTransform: "capitalize",
    color: "#8083a3",
  },
});
