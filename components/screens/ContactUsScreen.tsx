import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import BackButton from "../BackButton";
import SocialSection from "../SocialSection";
import UserIcon from "../UserIcon";

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      {" "}
      <View style={styles.header}>
        <BackButton />
        <UserIcon />
      </View>
      <Text style={styles.contactHeader}>Contact Us</Text>
      <View style={styles.socialSection}>
        <Text style={styles.socialHeader}>Social Media Platforms</Text>
        <SocialSection social="whatsapp" />
        <SocialSection social="twitter" />
        <SocialSection social="instagram" />
        <SocialSection social="telegram" />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: s(10),
    marginTop: vs(50),
  },

  contactHeader: {
    fontSize: s(30),
    marginTop: vs(20),
    fontWeight: "semibold",
    marginStart: s(16),
  },

  socialSection: {
    marginTop: vs(20),
    backgroundColor: "#f5f5fa",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(26),
  },
  socialHeader: {
    fontSize: s(16),
    fontWeight: "semibold",
    textTransform: "capitalize",
  },
});
