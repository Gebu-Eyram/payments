import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, View } from "react-native";
import { s } from "react-native-size-matters";

const SocialCircle = ({
  social,
}: {
  social: "whatsapp" | "twitter" | "instagram" | "telegram";
}) => {
  // This component currently does not use the 'social' prop, but it can be extended in the future.

  const icons = {
    whatsapp: <FontAwesome name="whatsapp" size={s(20)} color="#229ED9" />,
    facebook: <FontAwesome name="facebook" size={s(20)} color="#229ED9" />,
    instagram: <FontAwesome name="instagram" size={s(20)} color="#229ED9" />,
    twitter: <FontAwesome name="twitter" size={s(20)} color="#229ED9" />,
  };

  return (
    <View style={styles.container}>
      {
        //@ts-ignore
        icons[social] || (
          <FontAwesome name="share" size={s(20)} color="#229ED9" />
        )
      }
    </View>
  );
};

export default SocialCircle;

const styles = StyleSheet.create({
  container: {
    width: s(40),
    height: s(40),
    borderRadius: s(20),
    borderColor: "#e4e6e8",
    borderWidth: s(1),
    backgroundColor: "",
    justifyContent: "center",
    alignItems: "center",
  },
});
